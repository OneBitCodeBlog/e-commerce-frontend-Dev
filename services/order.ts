import api from './api';
import Order from '../dtos/Order';

interface OrderData {
  order: Order;
}

const OrderService = {
  show(url: string) {
    return api.get<OrderData>(url).then(resp => resp.data.order);
  }
}

export default OrderService;