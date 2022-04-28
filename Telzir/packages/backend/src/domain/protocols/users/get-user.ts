interface IGetUser {
  apply(user_id: string): Promise<UserDataReturn | string>;
}

export { IGetUser };
