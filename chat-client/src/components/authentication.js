const Authentication = {
  isAuthenticated: false,
  authenticate(cb) {
    Authentication.isAuthenticated = true;
    // Check Authentication
    cb();
  },
  signout(cb) {
    Authentication.isAuthenticated = false;
    // Log Out
    cb();
  }
};

export default Authentication;