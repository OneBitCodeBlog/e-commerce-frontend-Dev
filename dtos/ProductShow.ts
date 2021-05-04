import Product from './Product';

type ProductShow = {
  sells_count: number;
  favorited_count: number;
} & Product;

export default ProductShow;