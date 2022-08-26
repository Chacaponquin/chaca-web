import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getTokenCookie = () => {
  const tokenCookie = cookies.get("jwt");

  if (tokenCookie) {
    localStorage.setItem("token", tokenCookie);
  }

  return localStorage.getItem("token") || null;
};
