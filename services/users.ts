import api from './api';
import User from '../dtos/User';
import Meta from '../dtos/Meta';

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface ChangePasswordData {
  password: string;
  password_confirmation: string;
  reset_password_token: string | string[];
}

interface SignInResponse {
  data: User
}

interface DefaultResponse {
  message: string;
}

interface IUsersIndexData {
  users: User[],
  meta: Meta
}

const UsersService = {
  signUp: ({ 
    name, 
    email, 
    password, 
    password_confirmation 
  }: SignUpData) => 
    api.post<void>('/auth/v1/user', {
      name,
      email,
      password,
      password_confirmation
    }),

  signIn: ({ email, password }: SignInData) => 
    api.post<SignInResponse>('auth/v1/user/sign_in', {
      email,
      password
    }),

  resetPassword: (email: string) => 
    api.post<DefaultResponse>('/auth/v1/user/password', {
      email,
      redirect_url: process.env.redirect_url
    }),

  changePassword: ({ 
    password, 
    password_confirmation, 
    reset_password_token 
  }: ChangePasswordData) => 
    api.patch<DefaultResponse>('/auth/v1/user/password', {
      password,
      password_confirmation,
      reset_password_token
    }),

  index(url: string) {
    return api.get<IUsersIndexData>(url).then(response => response.data);
  },

  create(user: User) {
    return api.post<void>('/admin/v1/users', { user: user });
  },

  update(user: User) {
    return api.put(`/admin/v1/users/${user.id}`, { user: user });
  },

  delete(id: number) {
    return api.delete(`/admin/v1/users/${id}`);
  }
}

export default UsersService;