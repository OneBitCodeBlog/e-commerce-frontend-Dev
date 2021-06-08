import api from './api';
import Checkout from '../dtos/Checkout';

interface CheckoutResponseData {
  order: {
    id: number;
  }
}

const CheckoutService = {
  execute(checkout: Checkout) {
    return api.post<CheckoutResponseData>('/storefront/v1/checkouts', checkout)
      .then(response => response.data.order);
  }
}

export default CheckoutService;