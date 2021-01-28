import MainComponent from '../components/shared/MainComponent';
import HighlightedProducts from '../components/Storefront/HighlightedProducts';

const Home: React.FC = () => {
  return (
    <MainComponent>
      <h1>Home</h1>
      <HighlightedProducts title="Em destaque"/>
    </MainComponent>
  )
}

export default Home;