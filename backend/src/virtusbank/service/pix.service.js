import dayjs from "dayjs";
import { AppDataSource } from "../config/database.js";
import { encodeKey, decodeKey } from "../utils/pix.js";
import AppError from "../shared/error/AppError.js";
import User from "../models/User.cjs";
import Pix from "../models/Pix.cjs";

class PixService {
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
    this.pixRepository = AppDataSource.getRepository(Pix);
  }

  async request(value, user) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id },
    });

    const requestData = {
      requestingUser: currentUser,
      value,
      status: "open",
    };

    const register = await this.pixRepository.save(requestData);

    const key = encodeKey(user.id || "", value, register.id);

    return key;
  }

  async pay(key, user) {
    const keyDecoded = decodeKey(key);

    if (keyDecoded.userId === user.id) {
      throw new AppError("Não é possível receber o PIX do mesmo usuário!", 401);
    }

    const requestingUser = await this.userRepository.findOne({
      where: { id: keyDecoded.userId },
    });
    const payingUser = await this.userRepository.findOne({
      where: { id: user.id },
    });

    if (payingUser?.wallet && payingUser.wallet < Number(keyDecoded.value)) {
      throw new AppError(
        "Não há saldo suficiente para realizar o pagamento!",
        401
      );
    }

    if (!requestingUser || !payingUser) {
      throw new AppError(
        "Não encontramos os clientes da transação, por favor, gere uma nova chave!",
        401
      );
    }

    requestingUser.wallet =
      Number(requestingUser?.wallet) + Number(keyDecoded.value);
    await this.userRepository.save(requestingUser);

    payingUser.wallet = Number(payingUser?.wallet) - Number(keyDecoded.value);
    await this.userRepository.save(payingUser);

    const pixTransaction = await this.pixRepository.findOne({
      where: {
        id: keyDecoded.registerId,
        status: "open",
      },
    });

    if (!pixTransaction) {
      throw new AppError(
        "Chave inválida! Impossível realizar o pagamento!",
        401
      );
    }

    pixTransaction.status = "close";
    pixTransaction.payingUser = payingUser;

    await this.pixRepository.save(pixTransaction);

    return { msg: "Pagamento efetuado com sucesso!" };
  }

  async transactions(user) {
    const pixReceived = await this.pixRepository.find({
      where: { requestingUser: { id: user.id }, status: "close" },
      relations: ["payingUser"],
    });

    const pixPaying = await this.pixRepository.find({
      where: { payingUser: { id: user.id }, status: "close" },
      relations: ["requestingUser"],
    });

    const received = pixReceived.map((transaction) => ({
      value: transaction.value,
      user: {
        firstName: transaction.payingUser.firstName,
        lastName: transaction.payingUser.lastName,
      },
      updatedAt: dayjs(new Date(transaction.updatedAt)).format(
        "DD/MM/YYYY HH:mm"
      ),
      type: "received",
    }));

    const paying = pixPaying.map((transaction) => ({
      value: transaction.value,
      user: {
        firstName: transaction.requestingUser.firstName,
        lastName: transaction.requestingUser.lastName,
      },
      updatedAt: dayjs(new Date(transaction.updatedAt)).format(
        "DD/MM/YYYY HH:mm"
      ),
      type: "paid",
    }));

    const allTransactions = received.concat(paying);

    allTransactions.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );

    return allTransactions;
  }
}

export default PixService;
