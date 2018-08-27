const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING
    },
    email: {
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