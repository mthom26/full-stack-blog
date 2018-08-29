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
/*
const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost);
    User.hasMany(models.Comment);
  };

  return User;
}

export default user;
*/