type formLogin = {
  user_name: string;
  password: string;
  telephone: string;
  age: string;
};
const handleCreateUser = ({
  user_name,
  password,
  telephone,
  age,
}: formLogin) => {
  if (user_name && password && telephone && age) {
    console.log(user_name, password, telephone, age);
  }
};

export { handleCreateUser };
