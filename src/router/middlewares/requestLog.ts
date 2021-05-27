import { Request, Response, NextFunction as Next } from 'express';
import logger from '@vendor/winston';

export function requestLog(request: Request, response: Response, next: Next): void{
    const oldStatus = response.status;
    const oldSendStatus = response.sendStatus;
    const { path } = request;
  
    response.sendStatus = (status: number) => {
      if ([200, 201, 204].includes(status)) {
        logger.info(`${request.connection.remoteAddress}:${request.connection.localPort} --> ${status} ${request.method} ${path}`);
      } else if ([400, 401, 403, 404, 409].includes(status)) {
        logger.warn(`${request.connection.remoteAddress}:${request.connection.localPort} --> ${status} ${request.method} ${path}`);
      } else if (status >= 500) {
        logger.error(`${request.connection.remoteAddress}:${request.connection.localPort} --> ${status} ${request.method} ${path}`);
      } else {
        logger.info(`${request.connection.remoteAddress}:${request.connection.localPort} --> ${status} ${request.method} ${path}`);
      }
  
      response.status = oldStatus;
      response.sendStatus = oldSendStatus;
      return response.sendStatus(status);
    };
    response.status = (status: number) => {
      if ([200, 201, 204].includes(status)) {
        logger.info(`${request.connection.remoteAddress}:${request.connection.localPort} --> ${status} ${request.method} ${path}`);
      } else if ([400, 401, 403, 404, 409].includes(status)) {
        logger.warn(`${request.connection.remoteAddress}:${request.connection.localPort} --> ${status} ${request.method} ${path}`);
      } else if (status >= 500) {
        logger.error(`${request.connection.remoteAddress}:${request.connection.localPort} --> ${status} ${request.method} ${path}`);
      } else {
        logger.info(`${request.connection.remoteAddress}:${request.connection.localPort} --> ${status} ${request.method} ${path}`);
      }
  
      response.status = oldStatus;
      response.sendStatus = oldSendStatus;
      return response.status(status);
    };

    next();
}

export default requestLog;
