import Joi from "joi";
import PixService from "../service/pix.service.js";
import AppError from "../shared/error/AppError.js";

class PixController {
  async request(request, response) {
    const schema = Joi.object({
      value: Joi.number().required(),
    });

    const { error } = schema.validate(request.body);

    if (error) {
      throw new AppError(error.details[0].message, 400);
    }

    const pixService = new PixService();
    const { value } = request.body;
    const user = request.user;

    const requestKey = await pixService.request(value, user);
    return response.status(200).send({ copyPasteKey: requestKey });
  }
  catch(err) {
    console.error(err);
    return response.status(500).json({ error: "Internal server error" });
  }

  async pay(request, response) {
    const schema = Joi.object({
      key: Joi.string().required(),
    });

    const { error } = schema.validate(request.params);

    if (error) {
      throw new AppError(error.details[0].message, 400);
    }

    const pixService = new PixService();
    const { key } = request.params;
    const payment = await pixService.pay(key, request.user);

    return response.status(201).send(payment);
  }

  async transactions(request, response) {
    const pixService = new PixService();
    const transactions = await pixService.transactions(request.user);

    return response.status(200).send({ transactions });
  }
}

export default new PixController();
