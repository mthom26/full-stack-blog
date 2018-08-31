import axios from 'axios';
const API_URL = 'http://localhost:8000/graphql';

const apiPost = (query, variables) => (
  axios.post(API_URL, {
    query, variables
  })
);

export { apiPost };