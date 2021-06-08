import api from './api';
import Coupon from '../dtos/Coupon';

interface ValidateCouponData {
  coupon: Coupon;
}

const ValidateCouponService = {
  execute(code: string) {
    return api.post<ValidateCouponData>(`/storefront/v1/coupons/${code}/validations`)
      .then(response => response.data.coupon);
  }
}

export default ValidateCouponService;