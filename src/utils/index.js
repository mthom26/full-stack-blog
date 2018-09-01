import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET;

const createToken = async (user) => {
  const { username, email, id } = user;
  return await jwt.sign({ id, username, email }, SECRET);
};

const verifyToken = async (token) => {
  return await jwt.verify(token, SECRET);
}

const createHash = async (toBeHashed) => {
  return await bcrypt.hash(toBeHashed, 10);
};

const verifyHash = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

export { createToken, verifyToken, createHash, verifyHash };