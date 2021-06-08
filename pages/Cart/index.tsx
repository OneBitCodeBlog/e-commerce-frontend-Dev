import { Col, Row, Badge, Form } from 'react-bootstrap';
import BlueBackground from '../../components/shared/BlueBackground';
import MainComponent from '../../components/shared/MainComponent';
import StyledButton from '../../components/shared/StyledButton';

import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import withAuth from '../../components/withAuth';

import CheckoutForm from '../../components/Storefront/CheckoutForm';

const Cart: React.FC = () => {
  return (
    <MainComponent>
      <Row className="mb-4">
        <Col lg="8" md="12" className="mt-4 mb-4">
          <div className="mb-4">
            <strong>Meu carrinho</strong>
          </div>

          <BlueBackground>
            <strong>Produto</strong>

            <div className={styles.product}>
              <Row>
                <Col sm="4" xs="12">
                  <img 
                    src="/assets/product_image.png" 
                    alt="Counter Strike" 
                    width={150}
                    height={100}
                  />
                </Col>

                <Col sm="6" xs="6">
                  <h1 className={styles.title}>Counter Strike</h1>

                  <div>
                    <Badge 
                      className={styles.primary_badge} 
                      variant="primary ml-1">
                        Ação
                    </Badge>

                    <Badge 
                      className={styles.primary_badge} 
                      variant="primary ml-1">
                        Aventura
                    </Badge>

                    <Badge 
                      className={styles.primary_badge} 
                      variant="primary ml-1">
                        Indie
                    </Badge>
                  </div>
                </Col>

                <Col sm="2" xs="6" className="text-center">
                  <strong className="d-block">R$ 89.90</strong>
                  <FontAwesomeIcon 
                    icon={faTrash} 
                    className={styles.icon}
                  />
                </Col>
              </Row>

              <hr className={styles.line} />

              <div className={styles.coupon}>
                <strong className="mr-3">
                  Possui um cupom de desconto
                </strong>

                <input 
                  type="text" 
                  className={styles.gray_input}
                  placeholder="EXEMPLO-DE-CUPOM"
                />

                <StyledButton 
                  action="Aplicar" 
                  type_button="red" 
                  className={styles.gray_button}
                />
              </div>

              <div className={styles.price_and_discount}>
                <strong className="d-blc">
                  R$ 209.80
                </strong>

                <div>
                  <span className={styles.blue_text}>
                    - 10% OFF +
                  </span>

                  <strong className={styles.blue_text}>
                    R$ 20.98
                  </strong>
                </div>
              </div>

              <hr className={styles.line} />

              <div>
                <strong>SUBTOTAL</strong>

                <strong className="float-right">
                  R$ 188.82
                </strong>
              </div>
            </div>
          </BlueBackground>
        </Col>

        <Col lg="4" md="12" className={styles.payment_column}>
          <div className={styles.back_button}>
            <div className="float-right">
              <StyledButton 
                action="Continuar Comprando" 
                icon={faArrowLeft} 
                type_button="blue"
              />
            </div>
          </div>

          <CheckoutForm />
        </Col>
      </Row>
    </MainComponent>
  )
}

export default withAuth(Cart);