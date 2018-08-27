const blogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('blogPost', {
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    }
  });

  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.Comment);
    BlogPost.belongsTo(models.User);
  };

  return BlogPost;
}

export default blogPost;