import MainComponent from '../components/shared/MainComponent';

import { useRouter } from 'next/router';

const Home: React.FC = () => {
  //TODO home page

  const router = useRouter();

  return (
    <MainComponent>
      <h1>Home Page</h1>

      <button onClick={() => router.push('/Auth/Login')}>Login</button>
    </MainComponent>
  )
}

export default Home;