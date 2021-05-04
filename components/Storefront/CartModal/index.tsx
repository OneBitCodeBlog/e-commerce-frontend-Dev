import styles from './styles.module.css';
import CartModalItem from '../CartModalItem';
import StyledButton from '../../shared/StyledButton';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { removeCartProduct } from '../../../store/modules/storefront/cartProducts/reducer';
import ProductShow from '../../../dtos/ProductShow';
import { useRouter } from 'next/router';

interface CartModalProps {
  searchPage?: boolean;
}

const CartModal: React.FC<CartModalProps> = ({searchPage = false}) => {
  const cartProducts: ProductShow[] = useSelector(state => state.cartProducts);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRemove = (index: number): void => {
    dispatch(removeCartProduct(index));
  }

  return  (
    <div className={`${styles.container} ${searchPage ? styles.search_page : ''}`}>
      <div className={styles.items}>
        {
          cartProducts?.map(
            (product, index) =>
              <CartModalItem 
                key={index}
                product={product}
                handleRemove={() => handleRemove(index)}
              />
          )
        }
              
      </div>

      <div className={styles.separator} />

      <div className={styles.actions}>
        <span>
          {
            `R$ ${cartProducts?.reduce((acc, item) => acc + item.price, 0).toFixed(2)}`
          }
        </span>

        <StyledButton 
          type_button="blue" 
          action="Finalizar Compra" 
          icon={faShoppingCart} 
          className="btn btn-danger" 
          onClick={() => router.push('/Cart')}
        />
      </div>
    </div>
  );
}

export default CartModal;