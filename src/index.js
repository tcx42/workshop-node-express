import express from 'express';
import { config } from './config.js';
import errorHandler from './middleware/errorHandler.js';
import routes from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(config.PORT, () =>
  console.log(`Server Running at http://localhost:${config.PORT}`)
);
