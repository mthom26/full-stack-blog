import axios from 'axios';

const API_URL = 'http://localhost:8000/graphql';

const getUserById = (variables) => (
  axios.post(API_URL, {
    query: `
      query($id: ID!) {
        user(id: $id) {
          id
          username
          email
        }
      }
    `,
    variables
  })
);

const getBlogPostById = (variables) => (
  axios.post(API_URL, {
    query: `
      query($id: ID!) {
        blogPost(id: $id) {
          id
          title
          content
          userId
        }
      }
    `,
    variables
  })
);

const getCommentById = (variables) => (
  axios.post(API_URL, {
    query:`
      query($id: ID!) {
        comment(id: $id) {
          id
          username
          email
        }
      }
    `,
    variables
  })
);

export { getUserById, getCommentById, getBlogPostById };