import router from './core';

/**
 * 
 * HTTTP method GET
 * @param path The path for which the middleware function is invoked; can be any of:
 *  - A string representing a path.
 *  - A path pattern.
 *  - A regular expression pattern to match paths.
 *  - An array of combinations of any of the above.
 * @param middlewares are functions that have access to the request object (req),
 *  the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next
 * @returns 
 */
export function GET(path: string, middlewares: any[] = []) {
    return (target: any, propertyKey: string) => {
        router.get(path, middlewares, target[propertyKey]);
    }
}

/**
 * 
 * HTTTP method POST
 * @param path The path for which the middleware function is invoked; can be any of:
 *  - A string representing a path.
 *  - A path pattern.
 *  - A regular expression pattern to match paths.
 *  - An array of combinations of any of the above.
 * @param middlewares are functions that have access to the request object (req),
 *  the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next
 * @returns 
 */
export function POST(path: string, middlewares: any[] = []) {
    return (target: any, propertyKey: string) => {
        router.post(path, middlewares, target[propertyKey]);
    }
}

/**
 * 
 * HTTTP method PATCH
 * @param path The path for which the middleware function is invoked; can be any of:
 *  - A string representing a path.
 *  - A path pattern.
 *  - A regular expression pattern to match paths.
 *  - An array of combinations of any of the above.
 * @param middlewares are functions that have access to the request object (req),
 *  the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next
 * @returns 
 */
export function PATCH(path: string, middlewares: any[] = []) {
    return (target: any, propertyKey: string) => {
        router.patch(path, middlewares, target[propertyKey]);
    }
}

/**
 * 
 * HTTTP method DELETE
 * @param path The path for which the middleware function is invoked; can be any of:
 *  - A string representing a path.
 *  - A path pattern.
 *  - A regular expression pattern to match paths.
 *  - An array of combinations of any of the above.
 * @param middlewares are functions that have access to the request object (req),
 *  the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next
 * @returns 
 */
export function DELETE(path: string, middlewares: any[] = []) {
    return (target: any, propertyKey: string) => {
        router.delete(path, middlewares, target[propertyKey]);
    }
}
