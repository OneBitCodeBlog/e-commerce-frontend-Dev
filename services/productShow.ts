import api from './api';
import ProductShowData from '../dtos/ProductShowData';

const ProductShowService = {
  show: (url: string) => {
    return api.get<ProductShowData>(url).then(response => response.data.product);
  }
}

export default ProductShowService;