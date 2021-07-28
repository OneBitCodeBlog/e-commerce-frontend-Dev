interface OrderItem {
  quantity: number;
  payed_price: number;
  product: string;
  categories: string[];
  image_url: string;
}

export default interface Order {
  id: number;
  payment_type: string;
  installments: number;
  subtotal: number;
  discount: number;
  line_items: OrderItem[]
}