class AppError {
  constructor(message, statusCode = 400, data) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}

export default AppError;
