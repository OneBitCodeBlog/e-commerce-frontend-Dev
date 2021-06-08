import React, { useState, useEffect } from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import BlueBackground from '../../components/shared/BlueBackground';
import MainComponent from '../../components/shared/MainComponent';
import StyledButton from '../../components/shared/StyledButton';

import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import withAuth from '../../components/withAuth';

import CheckoutForm from '../../components/Storefront/CheckoutForm';

import { useSelector, useDispatch } from 'react-redux';
import { removeCartProduct, clearCartProducts } from '../../store/modules/storefront/cartProducts/reducer';
import ProductShow from '../../dtos/ProductShow';

import ValidateCouponService from '../../services/validateCoupon';
import { toast } from 'react-toastify';
import Coupon from '../../dtos/Coupon';

import Head from 'next/head';

import AggregateItemsService from '../../util/AggregateItemsService';
import Checkout from '../../dtos/Checkout';

import CheckoutService from '../../services/checkout';

import { useRouter } from 'next/router';

const Cart: React.FC = () => {
  const [coupon, setCoupon] = useState<Coupon>();
  const [couponCode, setCouponCode] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const router = useRouter();
  const dispatch = useDispatch();
  const cartProducts: ProductShow[] = useSelector(state => state.cartProducts);

  useEffect(() => {
    setSubtotal(cartProducts?.reduce((acc, item) => acc + item.price, 0));
  }, [cartProducts])

  useEffect(() => {
    if (coupon) {
      setTotal((subtotal - subtotal * coupon?.discount_value / 100));
    } else {
      setTotal(subtotal);
    }
  }, [coupon, subtotal])

  const handleRemove = (index: number): void => {
    dispatch(removeCartProduct(index));
  }

  const validateCoupon = async(): Promise<void> => {
    if (couponCode === '') {
      setCoupon(null);
      return;
    }

    try {
      const response = await ValidateCouponService.execute(couponCode);
      setCoupon(response);
    } catch (error) {
      toast.error('Cupom inválido ou erro ao obter os dados do cupom!');
      console.log(error);
      setCoupon(null);
    }
  }

  const handleCheckoutSubmit = async(checkout: Checkout): Promise<void> => {
    try {
      const items = AggregateItemsService.execute(cartProducts);
      checkout.items = items;

      if (coupon) {
        checkout['coupon_id'] = coupon.id;
      }

      const order = await CheckoutService.execute(checkout);

      dispatch(clearCartProducts());

      router.push({
        pathname: '/PaymentConfirmation/[id]',
        query: {
          id: order.id
        }
      });

      toast.info('Pedido finalizado com sucesso!');

    } catch (error) {
      toast.error('Erro ao realizar o pedido, tente novamente!');
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <script type="text/javascript" src="https://sandbox.boletobancario.com/boletofacil/wro/direct-checkout.min.js"></script>
      </Head>
      <MainComponent>
        <Row className="mb-4">
          <Col lg="8" md="12" className="mt-4 mb-4">
            <div className="mb-4">
              <strong>Meu carrinho</strong>
            </div>

            <BlueBackground>
              <strong>Produto</strong>

              <div className={styles.product}>
                {
                  cartProducts?.map(
                    (product, index) =>
                      <Row 
                        key={index}
                        className="mb-4"
                      >
                        <Col sm="4" xs="12">
                          <img 
                            src={product.image_url}
                            alt={product.name} 
                            width={150}
                            height={100}
                          />
                        </Col>

                        <Col sm="6" xs="6">
                          <h1 className={styles.title}>{product.name}</h1>

                          <div>
                            {
                              product?.categories?.map(
                                category =>
                                <Badge 
                                  key={category.id}
                                  className={styles.primary_badge} 
                                  variant="primary ml-1">
                                    {category.name}
                                </Badge>
                              )
                            }
                          </div>
                        </Col>

                        <Col sm="2" xs="6" className="text-center">
                          <strong className="d-block">{`R$ ${product.price}`}</strong>
                          <FontAwesomeIcon 
                            icon={faTrash} 
                            className={styles.icon}
                            onClick={() => handleRemove(index)}
                          />
                        </Col>
                      </Row>
                  )
                }

                <hr className={styles.line} />

                <div className={styles.coupon}>
                  <strong className="mr-3">
                    Possui um cupom de desconto
                  </strong>

                  <input 
                    type="text" 
                    className={styles.gray_input}
                    placeholder="EXEMPLO-DE-CUPOM"
                    value={couponCode}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) =>
                        setCouponCode(evt.target.value)
                    }
                  />

                  <StyledButton 
                    action="Aplicar" 
                    type_button="red" 
                    className={styles.gray_button}
                    onClick={validateCoupon}
                  />
                </div>

                <div className={styles.price_and_discount}>
                  <strong className="d-block">
                    {`R$ ${subtotal.toFixed(2)}`}
                  </strong>

                  {
                    coupon &&
                      <div>
                        <span className={styles.blue_text}>
                          {`- ${coupon?.discount_value}% OFF + `}
                        </span>

                        <strong className={styles.blue_text}>
                          {`R$ ${(subtotal * coupon?.discount_value / 100).toFixed(2)}`}
                        </strong>
                      </div>
                  }
                </div>

                <hr className={styles.line} />

                <div>
                  <strong>SUBTOTAL</strong>

                  <strong className="float-right">
                    {`R$ ${total.toFixed(2)}`}
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

            <CheckoutForm 
              total={total}
              handleFormSubmit={handleCheckoutSubmit}
            />
          </Col>
        </Row>
      </MainComponent>
    </>
  )
}

export default withAuth(Cart);