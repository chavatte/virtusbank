import express from 'express';
import PixController from '../controllers/PixController.js';
import userAuthenticated from '../middlewares/userAuthenticated.js';

const pixRouter = express.Router();

pixRouter.use(userAuthenticated);

pixRouter.post('/request', PixController.request);
pixRouter.post('/pay/:key', PixController.pay);
pixRouter.get('/transactions', PixController.transactions);

export default pixRouter;