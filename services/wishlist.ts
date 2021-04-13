import api from './api';

const WishlistService = {
  add(productId: number) {
    return api.post<void>('/storefront/v1/wish_items', { wish_item: { product_id: productId } });
  }
}

export default WishlistService;