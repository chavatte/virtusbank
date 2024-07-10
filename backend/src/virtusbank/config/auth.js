import * as dotenv from 'dotenv';

dotenv.config();

export default {
  jwt: {
    secret: process.env.APP_SECRET || "default",
    expiresIn: "1d",
  },
};
