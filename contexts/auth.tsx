import { createContext, useContext, useState } from 'react'
import useSWR from 'swr';

import api from '../services/api';

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextInterface {
  user: IUser;
  signIn(credentials: SignInCredentials): Promise<void>,
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState();

  const signIn = async({email, password}: SignInCredentials) => {
    const response = await api.post('auth/v1/user/sign_in', {
      email,
      password
    })

    console.log(response)
  }

  return (
    <AuthContext.Provider
      value={{
        user: { id: 1, name: 'test', email: 'test@test.com' },
        signIn
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextInterface {
  const context = useContext(AuthContext);

  if(!context) {
    throw Error('useAuth must be used within an AuthProvider');
  }

  return context;
}