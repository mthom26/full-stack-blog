const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    content: {
      type: DataTypes.STRING
    }
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.BlogPost);
    Comment.belongsTo(models.User);
  };

  return Comment;
};

export default comment;
