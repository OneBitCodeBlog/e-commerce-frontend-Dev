export default interface Coupon {
  id: number;
  name: string;
  code: string;
  status: string;
  discount_value: number;
  due_date: string;
}