import api from './api';
import Product from '../dtos/Product';

type ProductShow = {
  sells_count: number;
  favorited_count: number;
} & Product;

interface ProductShowData {
  product: ProductShow;
}

const ProductShowService = {
  show: (url: string) => {
    return api.get<ProductShowData>(url).then(response => response.data.product);
  }
}

export default ProductShowService;