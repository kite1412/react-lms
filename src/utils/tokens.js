import { jwtDecode } from "jwt-decode";

export const isJwtExpired = (jwt) => {
  try {
    const payload = jwtDecode(jwt);

    return (Date.now() / 1000) > payload.exp;
  } catch (e) {
    console.error(e);
    return null;
  }
};