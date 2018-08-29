export const getComment = (db, id) => {
  return db.select('*').from('comments')
    .where('id', id)
    .then(data => {
      //console.log(data);
      return data[0];
    });
};

export const getAllComments = (db) => {
  return db.select('*').from('comments')
    .then(data => {
      //console.log(data);
      return data;
    });
};
/*
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
*/