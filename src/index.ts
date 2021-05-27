import dotenv from 'dotenv';

/* If enviroment variables aren't configured .env will be used */
if (process.env.NODE_ENV === undefined) {
  dotenv.config();
}

import('./startup');

