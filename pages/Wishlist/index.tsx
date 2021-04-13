import MainComponent from '../../components/shared/MainComponent';
import BlueBackground from '../../components/shared/BlueBackground';

import { Col, Row, Badge } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import StyledButton from '../../components/shared/StyledButton';

import Menu from '../../components/Storefront/Menu';

import styles from './styles.module.css';

const Wishlist: React.FC = () => {
  return (
    <MainComponent>
      <Menu tab="desired_games"/>

      <div className="mt-4 mb-4">
        <BlueBackground>
          <Row>
            <Col md={2} xs={4} className="text-center pt-4">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </Col>

            <Col md={3} xs={8}>
              <img 
                className={styles.product_image}
                src="/assets/product_image.png" 
                alt="Counter Strike"
              />
            </Col>

            <Col md={4} xs={12} className={styles.product_data}>
              <h6 className="font-weight-bold">Counter Strike</h6>

              <Badge variant="primary ml-1" className={styles.primary_badge}>Ação</Badge>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Aventura</Badge>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Indie</Badge>
            </Col>

            <Col md={3} xs={12} className={styles.action}>
              <strong>R$ 89,90</strong>

              <div>
                <StyledButton action={"Comprar"} icon={faCartPlus} type_button="blue" />
              </div>
            </Col>
          </Row>
        </BlueBackground>
      </div>

      <div className="mt-4 mb-4">
        <BlueBackground>
          <Row>
            <Col md={2} xs={4} className="text-center pt-4">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </Col>

            <Col md={3} xs={8}>
              <img 
                className={styles.product_image}
                src="/assets/product_image.png" 
                alt="Counter Strike"
              />
            </Col>

            <Col md={4} xs={12} className={styles.product_data}>
              <h6 className="font-weight-bold">Counter Strike</h6>

              <Badge variant="primary ml-1" className={styles.primary_badge}>Ação</Badge>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Aventura</Badge>
              <Badge variant="primary ml-1" className={styles.primary_badge}>Indie</Badge>
            </Col>

            <Col md={3} xs={12} className={styles.action}>
              <strong>R$ 89,90</strong>

              <div>
                <StyledButton action={"Comprar"} icon={faCartPlus} type_button="blue" />
              </div>
            </Col>
          </Row>
        </BlueBackground>
      </div>
    </MainComponent>
  );
}

export default Wishlist;