export const getBlogPost = (db, id) => {
  return db.select('*').from('blogPosts')
    .where('id', id)
    .then(data => {
      //console.log(data);
      return data[0];
    });
};

export const getAllBlogPosts = (db) => {
  return db.select('*').from('blogPosts')
    .then(data => {
      //console.log(data);
      return data;
    });
};
/*
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
*/