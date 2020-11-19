import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const withAuthAdmin = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const loggedUser = useSelector(state => state.auth.loggedUser)
    const apiData = useSelector(state => state.auth.apiData)

    if(!loggedUser || 
      loggedUser.profile !== 'admin' || 
      !apiData || 
      !apiData['access-token']) {
      router.push('/Auth/Login')
    }

    return <Component {...props} />;
  }

  if(Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuthAdmin;