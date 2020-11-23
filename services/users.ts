import api from './api';

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

const UsersService = {
  signUp: ({ 
    name, 
    email, 
    password, 
    password_confirmation 
  }: SignUpData): Promise<void> => api.post('/auth/v1/user', {
    name,
    email,
    password,
    password_confirmation
  }),

  signIn: ({email, password}: SignInData) => api.post('auth/v1/user/sign_in', {
    email,
    password
  }),

  resetPassword: (email: string) => api.post('/auth/v1/user/password', {
    email,
    redirect_url: process.env.redirect_url
  }),

  changePassword: ({ 
    password, 
    password_confirmation, 
    reset_password_token 
  }: ChangePasswordData) => api.patch('/auth/v1/user/password', {
    password,
    password_confirmation,
    reset_password_token
  }),

}

export default UsersService;