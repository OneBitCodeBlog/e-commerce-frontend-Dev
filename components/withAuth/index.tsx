import { useAuth } from '../../contexts/auth'
import Login from '../../pages/Auth/Login'

const withAuth = Component => {
  const Auth = (props) => {
    const { loggedUser } = useAuth();

    if(!loggedUser) {
      return <Login />;
    }

    return <Component {...props} />;
  }

  if(Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;