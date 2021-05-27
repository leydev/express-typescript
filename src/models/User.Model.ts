interface IUser {
    name?: string;
    email?: string;
    password?: string;
    active?: string;
}

interface findReturn {
    name: string,
    email: string,
    active: boolean,
}

/**
 * It's a mock class model!
 * 
 */
class User {
    find(fields: IUser): Promise<findReturn> {
        return new Promise((resolve) => {
            resolve(
                {
                    name: 'leydev',
                    email: 'contato@leydev.com.br',
                    active: true,
                }
            )
        })
    }
}

export default User;
