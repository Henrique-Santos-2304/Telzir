import { Dispatch, SetStateAction } from "react";

export interface ResponseUser {
  user_name: string;
  telephone: string;
  age: string;
  token: string;
}

export interface UserProviderProps {
  children: React.ReactNode;
}

export type dataContextAuth = {
  signIn: (login: string, password: string) => Promise<ResponseUser | null>;
  user: ResponseUser | null;
  setUser: Dispatch<SetStateAction<ResponseUser | null>>;
  isUserAuth: () => void;
  verifyUserCookie: () => void;
};
