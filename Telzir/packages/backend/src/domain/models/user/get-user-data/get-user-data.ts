interface UserDataReturn {
  user_id: string;
  user_name: string;
  telephone: string;
  age: number;
}

interface IGetUser {
  apply(name: string, password: string): Promise<UserDataReturn | Error>;
}

export { IGetUser, UserDataReturn };
