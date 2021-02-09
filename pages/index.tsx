import MainComponent from '../components/shared/MainComponent';
import { Carousel } from 'react-bootstrap';
import styles from './styles.module.css';
import HightlightedProducts from '../components/Storefront/HighlightedProducts';

import useSwr from 'swr';
import HomeService from '../services/home';

import { toast } from 'react-toastify';

const Storefront: React.FC = () => {
  const { data, error } = useSwr('/storefront/v1/home', HomeService.index);
  const { featured, last_releases, cheapest } = { ...data };

  if (error)  {
    toast.error('Erro ao obter dados da home!');
    console.log(error);
  }

  return (
    <MainComponent>
      <Carousel className={styles.carousel}>
        {
          featured?.slice(0, 3)?.map(
            product => (
              <Carousel.Item key={product.id}>
                <img 
                  className={`d-block w-100 ${styles.carousel_image}`}
                  src={product.image_url}
                  alt={product.name}
                />
              </Carousel.Item>
            )
          )
        }
      </Carousel>

      <HightlightedProducts 
        title="Ofertas da semana" 
        type="highlighted"
        products={cheapest}
      />

      <HightlightedProducts 
        title="Lançamentos"
        products={last_releases}
      />

      <HightlightedProducts 
        title="Mais populares"
        products={featured}
      />
    </MainComponent>
  )
}

export default Storefront;