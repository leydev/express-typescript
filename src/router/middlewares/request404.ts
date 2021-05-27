import { Request, Response, NextFunction as Next } from 'express';
import i18n from '@languages';

export function request404(request: Request, response: Response, next: Next) {
    response.status(404).send({ 
        timestamp: Date.now(),
        message: i18n.__('not_found'),
        path: request.path,
    });
}

export default request404;