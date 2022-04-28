import bcrypt from 'bcrypt';

const encryptedPassword = async (password: string) => {
  const passwordEncrypted = await bcrypt.hash(password, 10);
  return passwordEncrypted;
};

export { encryptedPassword };
