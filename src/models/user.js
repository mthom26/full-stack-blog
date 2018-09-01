export const getUser = (db, id) => {
  return db.select('*').from('users')
    .where('id', id)
    .then(data => {
      return data[0];
    });
};

export const getAllUsers = (db) => {
  return db.select('*').from('users')
    .then(data => {
      return data;
    });
};

export const createUser = (db, userData) => {
  return db('users').returning('id').insert({
    username: userData.username,
    email: userData.email,
    password: userData.password
  });
};

export const getUserByEmail = (db, email) => {
  return db.select('*').from('users')
    .where('email', email)
    .then(data => {
      return data[0];
    })
};