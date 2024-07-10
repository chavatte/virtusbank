import express from 'express';
import UserController from '../controllers/UserController.js';
import userAuthenticated from '../middlewares/userAuthenticated.js';

const userRouter = express.Router();

userRouter.post('/signin', UserController.signin);
userRouter.post('/signup', UserController.signup);
userRouter.get('/me', userAuthenticated, UserController.me);

export default userRouter;