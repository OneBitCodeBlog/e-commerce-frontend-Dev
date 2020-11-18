import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

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
  const [loggedUser, setLoggedUser] = useState<IUser>(() => {
    if(Cookie.get('@user-data') && Cookie.get('@api-data')) {
      const user = JSON.parse(Cookie.get('@user-data'));

      const apiData = JSON.parse(Cookie.get('@api-data'));
      api.defaults.headers = apiData;

      return user;
    }

    return { } as IUser;
  });
  const router = useRouter();

  const signIn = async({email, password}: SignInCredentials) => {
    try {
      const response = await api.post('auth/v1/user/sign_in', {
        email,
        password
      })

      const { id, email: userEmail, name, profile} = response.data.data;

      const user = {
        id,
        name,
        email: userEmail,
        profile: profile
      };

      Cookie.set('@user-data', JSON.stringify(user));

      setLoggedUser(user);

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