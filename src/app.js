import express from 'express';
import cors from 'cors';
import configCors from './middlewares/configCors.js'
import routes from './app.routes.js';
import initRepositories from './app.repository.js';
import logger from './utils/log.js';
import configApp from './config/configApp.js';

const app = express();
app.use(express.json());

app.use(cors(configCors.corsOptions));

initRepositories();

app.use(routes);

app.use(logger);

app.get("/", (_, res) => {
    return res.status(200).json(configApp);
});

export default app;