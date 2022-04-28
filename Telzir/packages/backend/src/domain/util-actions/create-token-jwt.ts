import jwt from 'jsonwebtoken';

type dataReceivedForToken = {
  user_name: string;
  telephone: string;
};
const createJwt = (dataToken: dataReceivedForToken) => {
  const keyToken = process.env.TOKEN_SECRET as jwt.Secret;
  const token = jwt.sign(dataToken, keyToken, { expiresIn: '6h' });

  return token;
};

export { createJwt };
