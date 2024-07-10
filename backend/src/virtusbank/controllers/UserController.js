import Joi from "joi";
import AppError from "../shared/error/AppError.js";
import UserService from "../service/user.service.js";

class UserController {
  async signin(request, response) {
    try {
      const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      });

      const { error } = schema.validate(request.body);

      if (error) {
        throw new AppError(error.details[0].message, 400);
      }

      const { email, password } = request.body;
      const userService = new UserService();
      const user = await userService.signin({ email, password });
      return response.status(200).send(user);
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      } else {
        return response.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  }

  async signup(request, response) {
    try {
      const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      });

      const { error } = schema.validate(request.body);

      if (error) {
        throw new AppError(error.details[0].message, 400);
      }

      const userService = new UserService();
      const user = await userService.signup(request.body);
      return response.status(200).send(user);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      } else {
        return response.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  }

  async me(request, response) {
    try {
      const userService = new UserService();
      const user = await userService.me(request.user);
      return response.status(201).send(user);
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
      return response.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default new UserController();
