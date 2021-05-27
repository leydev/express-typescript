import { Request, Response } from 'express';
import { GET, POST } from '@router/methods';
import { Sigin } from './interfaces/IAuthentication';
import UserModel from '@models/User.Model'
import { __ } from 'i18n';

class Authentication {

    @GET('/')
    static show(request: Request, response: Response) {
        response.status(200).json({ message: 'Hello World' })
    }

    @POST('/authentication')
    static sigin(request: Sigin['request'], response: Sigin['reposnse']) {
        const { email, password } = request.body;

        const user = new UserModel();
        user.find({ email, password })
            .then((userDate) => {

            })
            .catch((error) => {
                response.status(500).json({
                    timestamp: Date.now(),
                    message: __('internal_server_error'),
                })
            });
    }

}

export default Authentication;
