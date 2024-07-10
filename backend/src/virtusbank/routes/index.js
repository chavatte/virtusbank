import express from "express";
import userRouter from "./user.routes.js";
import pixRouter from "./pix.routes.js";
import swaggerRouter from "../../swagger/routes/swagger.routes.js";

const routes = express.Router();

routes.use("/virtusbank/docs", swaggerRouter);
routes.use("/api/virtusbank/user", userRouter);
routes.use("/api/virtusbank/pix", pixRouter);
routes.get("/", (req, res) => {
  res.render("index");
});

export default routes;
