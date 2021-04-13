import api from './api';
import ProductSearch from '../dtos/ProductSearch';

interface WishlistIndexData {
  wish_items: ProductSearch[];
}

const WishlistService = {
  index(url: string) {
    return api.get<WishlistIndexData>(url).then(response => response.data);
  },

  add(productId: number) {
    return api.post<void>('/storefront/v1/wish_items', { wish_item: { product_id: productId } });
  },

  remove(productId: number) {
    return api.delete<void>(`/storefront/v1/wish_items/${productId}`);
  }
}

export default WishlistService;