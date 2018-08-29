import knex from 'knex';

import * as userFuncs from './user';
import * as blogPostFuncs from './blogPost';
import * as commentFuncs from './comment';

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'password',
    database : 'fullstack-blog-test'
  }
});

export { userFuncs, blogPostFuncs, commentFuncs };

export default db;