interface IGetUser {
  apply(user_id: string): Promise<any>;
}

export { IGetUser };
