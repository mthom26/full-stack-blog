import axios from 'axios';

const API_URL = 'http://localhost:8000/graphql';

export const user = (variables) => {
  return (
    axios.post(API_URL, {
      query: `
        query ($id: ID!) {
          user(id: $id) {
            id
            username
            email
          }
        }
      `, variables
    })
  );
};

// Test function to make sure async/await works
export const test = () => {
  return (
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
  );
};