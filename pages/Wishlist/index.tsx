import MainComponent from '../../components/shared/MainComponent';
import BlueBackground from '../../components/shared/BlueBackground';

import { Col, Row, Badge } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import StyledButton from '../../components/shared/StyledButton';

import Menu from '../../components/Storefront/Menu';

import styles from './styles.module.css';

import useSwr from 'swr';
import WishlistService from '../../services/wishlist';

import { toast } from 'react-toastify';

const Wishlist: React.FC = () => {
  const { data, error } = useSwr('/storefront/v1/wish_items', WishlistService.index);

  if (error) {
    toast.error('Erro ao obter os games desejados.');
    console.log(error);
  }

  return (
    <MainComponent>
      <Menu tab="desired_games"/>

    {
      data?.wish_items?.map(
        wish_item =>
          <div className="mt-4 mb-4" key={wish_item.id}>
            <BlueBackground>
              <Row>
                <Col md={2} xs={4} className="text-center pt-4">
                  <FontAwesomeIcon icon={faHeart} size="lg" />
                </Col>

                <Col md={3} xs={8}>
                  <img 
                    className={styles.product_image}
                    src={wish_item.image_url} 
                    alt={wish_item.name}
                  />
                </Col>

                <Col md={4} xs={12} className={styles.product_data}>
                  <h6 className="font-weight-bold">{wish_item.name}</h6>

                  {
                    wish_item?.categories?.map(
                      category => 
                        <Badge 
                          key={category.id}
                          variant="primary ml-1" 
                          className={styles.primary_badge}>
                            {category.name}
                        </Badge>
                    )
                  }
                </Col>

                <Col md={3} xs={12} className={styles.action}>
                  <strong>{`R$ ${wish_item.price}`}</strong>

                  <div>
                    <StyledButton 
                      action={"Comprar"} 
                      icon={faCartPlus} 
                      type_button="blue" 
                    />
                  </div>
                </Col>
              </Row>
            </BlueBackground>
          </div>
      )
    }
    </MainComponent>
  );
}

export default Wishlist;