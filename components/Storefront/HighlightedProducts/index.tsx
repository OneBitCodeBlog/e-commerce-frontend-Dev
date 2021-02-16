import { Row, Col, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import ProductInfo from '../../shared/ProductInfo';

import ProductHome from '../../../dtos/ProductHome';

interface HightlightedProductsProps {
  title: string;
  type?: string;
  products: ProductHome[];
  handleSeeMore(event: React.MouseEvent<HTMLElement>): void;
}

const HightlightedProducts: React.FC<HightlightedProductsProps> = ({ title, type, products, handleSeeMore }) => {
  return (
    <div className={styles.products}>
      <Row className={styles.products_header}>
        <h5>{title}</h5>

        <hr className={styles.line}/>

        <Button
          onClick={handleSeeMore}
          className={
            `${type === 'highlighted' ? styles.highlighted_button : styles.normal_button}`
          }
        >
          Ver Mais
        </Button>
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