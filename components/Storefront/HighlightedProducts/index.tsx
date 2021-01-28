import { Row, Col } from 'react-bootstrap';
import StyledButton from '../../shared/StyledButton';
import Link from 'next/link';
import styles from './styles.module.css';
import ProductInfo from '../../shared/ProductInfo';

interface HightlightedProductsProps {
  title: string;
  type?: string;
}

const HightlightedProducts: React.FC<HightlightedProductsProps> = ({ title, type }) => {
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
        <Col md={3}>
          <ProductInfo type={type}/>
        </Col>

        <Col md={3}>
          <ProductInfo type={type}/>
        </Col>

        <Col md={3}>
          <ProductInfo type={type}/>
        </Col>

        <Col md={3}>
          <ProductInfo type={type}/>
        </Col>
      </Row>

    </div>
  )
}

export default HightlightedProducts;