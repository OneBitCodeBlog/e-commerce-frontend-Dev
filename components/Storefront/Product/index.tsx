import { HTMLAttributes } from "react";
import { Col } from "react-bootstrap";
import styles from './styles.module.css';
import Game from '../../../dtos/Game';

type ProductProps = {
  product: Game;
} & HTMLAttributes<HTMLDivElement>;

const Product: React.FC<ProductProps> = ({ product, ...rest }) => {
  return (
    <Col 
      className={styles.product}
      {...rest}
    >
      <div>
        <img 
          src={product?.image_url} 
          alt={product?.name} 
          className="w-100"
        />
      </div>

      <div>
        <div>
          <span>
            {product?.name}
          </span>

          <span>
            {product?.description}
          </span>
        </div>
      </div>
    </Col>
  );
}

export default Product;