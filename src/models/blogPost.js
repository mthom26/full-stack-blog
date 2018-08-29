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

// idKey is the userId from parent User
export const getChildBlogPosts = (db, id, idKey) => {
  return db.select('*').from('blogPosts')
    .where(idKey, id)
    .then(data => {
      return data;
    });
};