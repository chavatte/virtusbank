import md5 from "crypto-js/md5.js";
import jsonwebtoken from "jsonwebtoken";
import authConfig from "../config/auth.js";
import { AppDataSource } from "../config/database.js";
import AppError from "../shared/error/AppError.js";
import User from "../models/User.cjs";

const { sign } = jsonwebtoken;

class UserService {
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async signin(user) {
    const { email, password } = user;
    const passwordHash = md5(password).toString();

    const existUser = await this.userRepository.findOne({
      where: { email, password: passwordHash },
    });

    if (!existUser) {
      throw new AppError("Usuário não encontrado", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        firstName: existUser.firstName,
        lastName: existUser.lastName,
        accountNumber: existUser.accountNumber,
        accountDigit: existUser.accountDigit,
        wallet: existUser.wallet,
      },
      secret,
      {
        subject: existUser.id,
        expiresIn,
      }
    );

    delete existUser.password;

    return { accessToken: token };
  }

  async signup(user) {
    const existUser = await this.userRepository.findOne({
      where: { email: user.email },
    });

    if (existUser) {
      throw new AppError("Já existe um usuário cadastrado com esse email", 401);
    }

    const userData = {
      ...user,
      password: md5(user.password).toString(),
      wallet: 100,
      accountNumber: Math.floor(Math.random() * 999999),
      accountDigit: Math.floor(Math.random() * 99),
    };

    const userCreate = await this.userRepository.save(userData);

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        accountNumber: userData.accountNumber,
        accountDigit: userData.accountDigit,
        wallet: userData.wallet,
      },
      secret,
      {
        subject: userCreate.id,
        expiresIn,
      }
    );

    return { accessToken: token };
  }

  async me(user) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id },
    });

    if (!currentUser) {
      throw new AppError("Usuário não encontrado", 401);
    }

    delete currentUser.password;

    return currentUser;
  }
}

export default UserService;
