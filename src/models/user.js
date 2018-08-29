export const getUser = (db, id) => {
  return db.select('*').from('users')
    .where('id', id)
    .then(data => {
      //console.log(data);
      return data[0];
    });
};

export const getAllUsers = (db) => {
  return db.select('*').from('users')
    .then(data => {
      //console.log(data);
      return data;
    });
};