import api from './api';
import Meta from '../dtos/Meta';
import OrdersList from '../dtos/OrdersList';

interface OrdersIndexData {
  orders: OrdersList[];
  meta: Meta;
}

const AdminOrdersService = {
  index(url: string) {
    return api.get<OrdersIndexData>(url).then(resp => resp.data);
  }
}

export default AdminOrdersService;