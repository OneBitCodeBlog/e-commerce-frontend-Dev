import api from './api';
import Order from '../dtos/Order';
import OrdersList from '../dtos/OrdersList';

interface OrderShowData {
  order: Order;
}

interface OrderIndexData {
  orders: OrdersList[];
}

const OrderService = {
  index(url: string) {
    return api.get<OrderIndexData>(url).then(resp => resp.data.orders);
  },

  show(url: string) {
    return api.get<OrderShowData>(url).then(resp => resp.data.order);
  }
}

export default OrderService;