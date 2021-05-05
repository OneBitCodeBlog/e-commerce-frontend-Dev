import styles from './styles.module.css';
import { Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import ProductShow from '../../../dtos/ProductShow';
import { MouseEventHandler } from 'react';

interface CartModalItemProps {
  product: ProductShow;
  handleRemove: MouseEventHandler<SVGSVGElement>;
}

const CartModalItem: React.FC<CartModalItemProps> = ({product, handleRemove}) => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={5}>
          <img 
            src={product.image_url} 
            alt={product.name}
          />
        </Col>

        <Col xs={7}>
          <p>
            {product.name}
          </p>

          <div className={styles.badges_container}>
            {
              product?.categories?.filter((_, index) => index < 2)?.map(
                category => 
                  <Badge 
                    key={category.id}
                    variant="primary ml-1" 
                    className={styles.badge}
                  >
                    {category.name}
                  </Badge>
                )
            }
          </div>

          <div className={styles.price_container}>
            <span>{`R$ ${product.price}`}</span>
            <FontAwesomeIcon 
              icon={faTrash}
              onClick={handleRemove}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CartModalItem;