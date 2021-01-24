import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import CouponForm from '../../../../components/Admin/CouponForm';
import Coupon from '../../../../dtos/Coupon';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';
import CouponsService from '../../../../services/coupons';

const New: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (coupon: Coupon): Promise<void> => {
    try {
      await CouponsService.create(coupon);
      toast.info('Cupom salvo com sucesso!');
      router.back();
    } catch (err) {
      toast.error('Erro ao salvar o cupom, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Cupom" path="Dashboard > Cupons > Adicionar cupom" />

      <CouponForm handleSubmit={handleSubmit}/>
    </AdminComponent>
  )
}

export default withAuthAdmin(New);