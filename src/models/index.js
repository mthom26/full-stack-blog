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

/*
import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.TEST_DATABASE || process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  }
);

const models = {
  User: sequelize.import('./user'),
  BlogPost: sequelize.import('./blogPost'),
  Comment: sequelize.import('./comment')
}

Object.keys(models).forEach(key => {
  if('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
*/