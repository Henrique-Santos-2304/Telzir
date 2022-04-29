import { ResponseUser } from "./protocols/response-user";
import { api } from "./api";
import { parseCookies } from "nookies";
type tokenState = string | undefined;

const { "tezirauth-token": token } = parseCookies();

const tokenHeader = (tokenId: tokenState) => {
  return { headers: { Authorization: tokenId ? tokenId : token } };
};

export const requestLoginAuth = async (login: string, password: string) => {
  const bodyReQ = { login, password };
  return api
    .post<Promise<ResponseUser | null>>("users/signin", bodyReQ)
    .then((response) => response.data)
    .catch((err) => {
      console.log("[ERROR] error login data");
      console.log(err);
      return null;
    });
};
