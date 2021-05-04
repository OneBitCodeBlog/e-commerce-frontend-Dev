import api from './api';
import User from '../dtos/User';

const ProfileService = {
  update(user: User) {
    return api.put<void>('/auth/v1/user', user);
  }
}

export default ProfileService;
