import api from './api';

import Coupon from '../dtos/Coupon';
import Meta from '../dtos/Meta';

interface CouponsIndexData {
  coupons: Coupon[],
  meta: Meta
}

const CouponsService = {
  index(url: string) {
    return api.get<CouponsIndexData>(url).then(response => response.data);
  },

  create(coupon: Coupon) {
    return api.post<void>('/admin/v1/coupons', { coupon: coupon });
  },

  update(coupon: Coupon) {
    return api.patch<void>(`/admin/v1/coupons/${coupon.id}`, { coupon: coupon });
  },

  delete(id: number) {
    return api.delete<void>(`/admin/v1/coupons/${id}`);
  }
}

export default CouponsService;