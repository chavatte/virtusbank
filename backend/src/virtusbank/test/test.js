import { connectToDatabase } from "../config/database.js";
import UserService from "../service/user.service.js";
import PixService from "../service/pix.service.js";

const logStep = (message, data = null) => {
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp} - Passo: ${message}`, data ? data : "");
};

const testPix = async () => {
  try {
    await connectToDatabase();
    logStep("Conexão com o banco de dados estabelecida");

    const userService = new UserService();
    const pixService = new PixService();

    const user1Data = {
      firstName: "Alice",
      lastName: "Silva",
      email: `alice.silva${Date.now()}@example.com`,
      password: "senha123",
    };

    const user2Data = {
      firstName: "Bob",
      lastName: "Santos",
      email: `bob.santos${Date.now()}@example.com`,
      password: "outrasenha",
    };

    const user1 = await userService.signup(user1Data);
    const user2 = await userService.signup(user2Data);

    logStep("Usuário 1 cadastrado:", user1);
    logStep("Usuário 2 cadastrado:", user2);

    const user1Signin = await userService.signin({
      email: user1Data.email,
      password: user1Data.password,
    });
    const user1Token = user1Signin.accessToken.split(".")[1];
    const decodedUser1 = JSON.parse(
      Buffer.from(user1Token, "base64").toString()
    );
    const user1WithId = await userService.me({ id: decodedUser1.sub });

    const pixKey = await pixService.request(50, user1WithId);
    logStep("Chave PIX gerada por User 1:", pixKey);

    const user2Signin = await userService.signin({
      email: user2Data.email,
      password: user2Data.password,
    });
    const user2Token = user2Signin.accessToken.split(".")[1];
    const decodedUser2 = JSON.parse(
      Buffer.from(user2Token, "base64").toString()
    );
    const user2WithId = await userService.me({ id: decodedUser2.sub });

    const paymentResult = await pixService.pay(pixKey, user2WithId);
    logStep("Resultado do pagamento:", paymentResult);

    const user1Transactions = await pixService.transactions(user1WithId);
    const user2Transactions = await pixService.transactions(user2WithId);

    logStep("Transações do Usuário 1:", user1Transactions);
    logStep("Transações do Usuário 2:", user2Transactions);
    logStep("Teste de PIX concluído com SUCESSO!");
  } catch (error) {
    console.error("[ERRO] No teste PIX:", error);
  } finally {
    if (connectToDatabase.isInitialized) {
      await connectToDatabase.destroy();
    }
  }
};

testPix();
