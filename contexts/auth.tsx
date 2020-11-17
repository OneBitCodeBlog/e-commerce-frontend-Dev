import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router';

import api from '../services/api';

interface IUser {
  id: number;
  name: string;
  email: string;
  profile: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextInterface {
  loggedUser: IUser;
  signIn(credentials: SignInCredentials): Promise<void>,
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<IUser>();
  const router = useRouter();

  const signIn = async({email, password}: SignInCredentials) => {
    try {
      const response = await api.post('auth/v1/user/sign_in', {
        email,
        password
      })

      setLoggedUser({
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        profile: response.data.profile
      });

      router.push('/')
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loggedUser,
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