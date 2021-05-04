import { useState } from 'react';
import styles from './styles.module.css';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Logo';

import { useRouter } from 'next/router';

import LoggedService from '../../../../util/LoggedService';

import Badge from '../../Badge';
import CartModal from '../../../Storefront/CartModal';

import { useSelector } from 'react-redux';
import ProductShow from '../../../../dtos/ProductShow';

const CustomerHeader: React.FC = () => {
  const [search, setSearch] = useState('');
  const [showCartModal, setShowCartModal] = useState(false);

  const cartProducts: ProductShow[] = useSelector(state => state.cartProducts);

  const router = useRouter();

  const handleSearch = (): void => {
    router.push(`
      /Search?search=${search}&length=12&page=1&order=price&direction=asc
    `);
  }

  const handleUserRedirect = (): void => {
    router.push(
      LoggedService.execute() ? '/Profile' : 'Auth/Admin'
    )
  }

  return (
    <Row className={styles.background}>
      <Col md={6} className="mt-2">
        <Logo />
      </Col>

      <Col md={6} className="mt-2 text-center">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <InputGroup
              className={`${router.pathname === '/Search' ? styles.hidden : ''}`}
            >
              <FormControl
                placeholder="Pesquisar produto"
                value={search}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setSearch(evt.target.value)
                }

                onKeyUp={
                  (evt: React.KeyboardEvent<HTMLInputElement>) => {
                    if (evt.key.toLowerCase() === 'enter') {
                      handleSearch();
                    }
                  }
                }
              />
            </InputGroup>
          </Col>

          <Col md={6}>
            <Row>
              <Col className={`${router.pathname === '/Search' ? styles.hidden : ''}`}>
                <FontAwesomeIcon
                  icon={faSearch}
                  color="var(--color-gray-light)"
                  onClick={handleSearch}
                />
              </Col>

              <Col>
                <div className={styles.cart_container}>
                  <FontAwesomeIcon 
                    icon={faShoppingCart} 
                    color="var(--color-gray-light)" 
                    onClick={() => setShowCartModal(!showCartModal)}
                  />
                  {
                    cartProducts?.length > 0 &&
                      <Badge>{cartProducts.length}</Badge>
                  }

                  {
                    cartProducts?.length > 0 && showCartModal &&
                      <CartModal searchPage={router.pathname === '/Search'} />
                  }
                </div>
              </Col>

              <Col>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  color="var(--color-gray-light)"
                  onClick={handleUserRedirect}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CustomerHeader;