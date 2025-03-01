/**
 * @interface
 */
export default class UserService {
  /**
   * Log in current session with provided username & password.
   * @param {string} username - inputted username to be processed. 
   * @param {string} password - inputted password to be processed.
   * @returns {Boolean} Whether login is success or not.
   */
  login(username, password) {
    throw new Error("Not implemented");
  }

  /**
   * Sign up current session with provided username & password.
   * @param {string} username - inputted username to be processed. 
   * @param {string} password - inputted password to be processed.
   * @returns {Boolean} Whether sign up is success or not.
   */
  signUp(username, password) {
    throw new Error("Not Implemented");
  }

  /**
   * Log out current session
   */
  logout() {
    throw new Error("Not Implemented");
  }
}