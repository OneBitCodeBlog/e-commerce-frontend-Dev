import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import CouponForm from '../../../../components/Admin/CouponForm';
import Coupon from '../../../../dtos/Coupon';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { clearCouponToEdit } from '../../../../store/modules/admin/coupon/reducer';
import { toast } from 'react-toastify';

import CouponsService from '../../../../services/coupons';

const Edit: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async(coupon: Coupon): Promise<void> => {
    try {
      await CouponsService.update(coupon);
      toast.info('Cupom atualizado com sucesso!');
      dispatch(clearCouponToEdit());
      router.back();
    } catch (err) {
      toast.error('Erro ao atualizar o cupom, tente novamente.');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Editar Cupom" path="Dashboard > Cupons > Detalhes do cupom > Editar cupom" />

      <CouponForm handleSubmit={handleSubmit} action="Atualizar"/>
    </AdminComponent>
  )
}

export default withAuthAdmin(Edit);