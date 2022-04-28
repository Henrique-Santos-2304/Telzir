interface AddUser {
  name: string;
  password: string;
  telephone: string;
  age: number;
}

interface IAddUser {
  apply({ name, password, telephone, age }: AddUser): Promise<boolean>;
}

export { AddUser, IAddUser };
