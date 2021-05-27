import { Request, Response } from 'express';

export interface Sigin {
    request: Request<
        undefined,
        unknown,
        { email: string, password: string },
        undefined
    >;
    reposnse: Response;
}
