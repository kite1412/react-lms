import { USERNAME } from "../../constants/auth";
import UserService from "./userService";

export default class MockUserService extends UserService {
  login(username, password) {
    localStorage.setItem(USERNAME, username);
    return true;
  }

  signUp(username, password) {
    localStorage.setItem(USERNAME, username);
    return true;
  }

  logout() {
    localStorage.removeItem(USERNAME);
  }
}