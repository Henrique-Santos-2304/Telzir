interface AddUser {
  user_name: string;
  password: string;
  telephone: string;
  age: number;
}

interface IAddUser {
  apply({
    user_name,
    password,
    telephone,
    age
  }: AddUser): Promise<void | Error>;
}

export { AddUser, IAddUser };
