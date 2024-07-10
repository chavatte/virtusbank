import pkg from "jsonwebtoken";
import authConfig from "../config/auth.js";
import AppError from "../shared/error/AppError.js";

const { verify } = pkg;

const userAuthenticated = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token não fornecido", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub, firstName, lastName } = decoded;

    request.user = {
      id: sub,
      firstName,
      lastName,
    };

    return next();
  } catch (error) {
    throw new AppError("JWT Token inválido", 401);
  }
};

export default userAuthenticated;
