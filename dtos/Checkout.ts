import CheckoutItem from './CheckoutItem';

interface Address {
  street: string;
  number: string;
  city: string;
  state: string;
  post_code: string;
}

interface Checkout {
  payment_type: string;
  installments: string;
  coupon_id?: number;
  card_hash?: string;
  document: string;
  items: CheckoutItem[];
  address?: Address;
}

export default Checkout;