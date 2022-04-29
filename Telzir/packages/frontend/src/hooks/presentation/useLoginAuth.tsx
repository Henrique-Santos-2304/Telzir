import { requestLoginAuth } from "api/request-api";
import {
  dataContextAuth,
  ResponseUser,
  UserProviderProps,
} from "hooks/protocols/use-login-auth";
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import React, { createContext, useContext, useState } from "react";

const UserLoginData = createContext({} as dataContextAuth);

function UseLoginProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<ResponseUser | null>(null);

  const getCookies = () => {
    const {
      "telzirauth-token": token,
      "telzirauth-usertype": user_name,
      "telzirauth-telephone": telephone,
      "telzirauth-age": age,
    } = parseCookies();

    return { telephone, user_name, token, age };
  };

  const verifyUserCookie = () => {
    const { token, telephone, user_name, age } = getCookies();
    setUser({ telephone, user_name, token, age });

    if (token) {
      Router.push("/check-price-calls");
    }
  };

  const signIn = async (login: string, password: string) => {
    const response = await requestLoginAuth(login, password);
    if (response) {
      const { token, user_name, telephone, age } = response;
      if (token) {
        const propsCookie = { maxAge: 60 * 60 * 2 }; //2hours

        setCookie(undefined, "telzirauth-token", token, propsCookie);
        setCookie(undefined, "telzirauth-user_name", user_name, propsCookie);
        setCookie(undefined, "telzirauth-telephone", telephone, propsCookie);
        setCookie(undefined, "telzirauth-age", age, propsCookie);

        setUser({ telephone, user_name, token, age });

        Router.push("/check-price-calls");
      }
    }

    return response;
  };

  const isUserAuth = () => {
    const { token, telephone, user_name, age } = getCookies();

    setTimeout(() => {
      if (!user && !token) {
        setUser(null);
        Router.push("/");
      } else {
        if (!user) {
          setUser({ token, user_name, telephone, age });
          return;
        }
        return;
      }
    }, 1200);
  };

  return (
    <UserLoginData.Provider
      value={{
        signIn,
        user,
        setUser,
        isUserAuth,
        verifyUserCookie,
      }}
    >
      {children}
    </UserLoginData.Provider>
  );
}

function useContextAuth() {
  const context = useContext(UserLoginData);

  return context;
}

export { useContextAuth, UserLoginData, UseLoginProvider };
