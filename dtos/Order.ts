import OrderItem from './OrderItem';

export default interface Order {
  id: number;
  payment_type: string;
  installments: number;
  subtotal: number;
  discount: number;
  line_items: OrderItem[]
}