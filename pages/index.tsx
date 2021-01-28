import MainComponent from '../components/shared/MainComponent';
import ProductInfo from '../components/shared/ProductInfo';

const Home: React.FC = () => {
  return (
    <MainComponent>
      <h1>Home</h1>
      <ProductInfo/>
    </MainComponent>
  )
}

export default Home;