type formLogin = {
  user_name: string;
  password: string;
};
const handleLogin = ({ user_name, password }: formLogin) => {
  if (user_name && password) {
    console.log(user_name, password);
  }
};

export { handleLogin };
