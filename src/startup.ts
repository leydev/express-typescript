import logger from '@vendor/winston';
import server from './server';

const PORT: number = Number(process.env.SRV_PORT);
const HOSTNAME: string = process.env.SRV_HOSTNAME;

server(
    PORT,
    HOSTNAME,
)
    .then(() => {
        logger.info(`API online ${HOSTNAME}:${PORT}`);
    })
    .catch((error) => {
        logger.error(error);
    });

