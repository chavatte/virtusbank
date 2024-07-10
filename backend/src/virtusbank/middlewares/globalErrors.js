import AppError from "../shared/error/AppError.js";

const globalErrors = (err, request, response, next) => {
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      status: "error",
      message: err.message,
      data: err?.data,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};

export default globalErrors;
