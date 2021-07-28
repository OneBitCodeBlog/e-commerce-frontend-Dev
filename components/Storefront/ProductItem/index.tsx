import { HTMLAttributes } from "react";
import { Col } from "react-bootstrap";
import styles from './styles.module.css';

const ProductItem: React.FC<HTMLAttributes<HTMLDivElement>> = ({...rest}) => {
  return (
    <Col 
      className={styles.product}
      {...rest}
    >
      <div>
        <img 
          src="https://meups.com.br/wp-content/uploads/2018/01/God-of-War-4-900x503.jpg" 
          alt="Product Name" 
          className="w-100"
        />
      </div>

      <div>
        <div>
          <span>
            God of War
          </span>

          <span>
            Rem assumenda illum voluptatibus doloribus illo.
          </span>
        </div>
      </div>
    </Col>
  );
}

export default ProductItem;