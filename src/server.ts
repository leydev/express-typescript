import express, { Express } from 'express';
import i18n from '@languages';
import router from '@router';
import request404 from '@router/middlewares/request404';
import requestLog from '@router/middlewares/requestLog';
import '@controllers';

const app: Express = express();

app.disable('x-powered-by');
app.use(express.json({}))
app.use(i18n.init);
app.use(requestLog);
app.use(router);
app.use(request404);

export const server = (port: number, hostname: string = '0.0.0.0'): Promise<void> => {
    return new Promise((resolve) => {
        app.listen(port, hostname, resolve);
    });
}

export default server;
