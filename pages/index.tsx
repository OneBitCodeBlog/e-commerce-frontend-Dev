import MainComponent from '../components/shared/MainComponent';
import HighlightedProducts from '../components/Storefront/HighlightedProducts';
import { Carousel } from 'react-bootstrap';
import styles from './styles.module.css';
import HightlightedProducts from '../components/Storefront/HighlightedProducts';

const Storefront: React.FC = () => {
  return (
    <MainComponent>
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
            alt="First Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
            alt="Second Slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
            alt="Third Slide"
          />
        </Carousel.Item>
      </Carousel>

      <HightlightedProducts title="Ofertas da semana" type="highlighted"/>

      <HightlightedProducts title="Lançamentos"/>

      <HightlightedProducts title="Mais populares"/>
    </MainComponent>
  )
}

export default Storefront;