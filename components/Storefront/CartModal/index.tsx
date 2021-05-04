import styles from './styles.module.css';
import CartModalItem from '../CartModalItem';
import StyledButton from '../../shared/StyledButton';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface CartModalProps {
  searchPage?: boolean;
}

const CartModal: React.FC<CartModalProps> = ({searchPage = false}) => {
  return  (
    <div className={`${styles.container} ${searchPage ? styles.search_page : ''}`}>
      <div className={styles.items}>
        <CartModalItem />
        <CartModalItem />
        <CartModalItem />
        <CartModalItem />
        <CartModalItem />
      </div>

      <div className={styles.separator} />

      <div className={styles.actions}>
        <span>
          R$ 999,99
        </span>

        <StyledButton 
          type_button="blue" 
          action="Finalizar Compra" 
          icon={faShoppingCart} 
          className="btn btn-danger" 
        />
      </div>
    </div>
  );
}

export default CartModal;