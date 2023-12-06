import Cookie from "js-cookie";

export const isLoggedIn = () => {
  return !!Cookie.get("token");
};
