import User from './User';

export default interface AuthState {
  auth: {
    loggedUser: User;
  }
}
