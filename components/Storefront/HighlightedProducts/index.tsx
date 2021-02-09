import { Row, Col } from 'react-bootstrap';
import StyledButton from '../../shared/StyledButton';
import Link from 'next/link';
import styles from './styles.module.css';
import ProductInfo from '../../shared/ProductInfo';

import ProductHome from '../../../dtos/ProductHome';

interface HightlightedProductsProps {
  title: string;
  type?: string;
  products: ProductHome[];
}

const HightlightedProducts: React.FC<HightlightedProductsProps> = ({ title, type, products }) => {
  return (
    <div className={styles.products}>
      <Row className={styles.products_header}>
        <h5>{title}</h5>

        <hr className={styles.line}/>

        <Link href="#">
          <a>
            <StyledButton action="Ver Mais" type_button="blue"/>
          </a>
        </Link>
      </Row>

      <Row>
        {
          products?.map(
            product => (
              <Col md={3} key={product.id}>
                  <ProductInfo 
                    type={type}
                    product={product}
                  />
              </Col>
            )
          )
        }
      </Row>

    </div>
  )
}

export default HightlightedProducts;