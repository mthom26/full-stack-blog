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

// idKey is the userId/blogPostId depending on the resolver
export const getChildComments = (db, id, idKey) => {
  return db.select('*').from('comments')
    .where(idKey, id)
    .then(data => {
      return data;
    });
};

export const createComment = (db, comment) => {
  return db('comments').returning('id').insert({
    ...comment
  });
};

export const deleteComment = (db, id) => {
  return db('comments').where('id', id).del();
};