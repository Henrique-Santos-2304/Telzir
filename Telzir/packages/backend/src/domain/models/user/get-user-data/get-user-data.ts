interface UserDataReturn {
  user_id: string;
  name: string;
  telephone: string;
  age: number;
}

interface IGetUser {
  apply(user_id: string): Promise<UserDataReturn | string>;
}

export { IGetUser, UserDataReturn };
