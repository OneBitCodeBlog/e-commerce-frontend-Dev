import { useState, useEffect } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';

import withAuthAdmin from '../../../../components/withAuthAdmin';

import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';

import CouponsService from '../../../../services/coupons';
import UrlService from '../../../../util/UrlService';

import useSwr from 'swr';
import NoData from '../../../../components/shared/NoData';

import { setCouponToEdit } from '../../../../store/modules/admin/coupon/reducer';

import Coupon from '../../../../dtos/Coupon';

const defaultUrl = '/admin/v1/coupons';

const List: React.FC = () => {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState(defaultUrl);
  const [couponToRemove, setCouponToRemove] = useState(0);

  const search: string = useSelector(state => state.search);

  const router = useRouter();
  const dispatch = useDispatch();

  const { data, error, mutate } = useSwr(url, CouponsService.index);

  useEffect(() => {
    setUrl(
      defaultUrl +
      UrlService.execute({ page: router.query.page, search })
    );
  }, [search, router.query.page])

  const handleShow = (id: number): void => {
    setCouponToRemove(id);
    setShow(true);
  }

  const handleClose = async (success: boolean): Promise<void> => {
    setShow(false);

    if (!success) return;

    try {
      await CouponsService.delete(couponToRemove);
      toast.info('Cupom removido com sucesso!');
      mutate();
    } catch (err) {
      toast.error('Erro ao remover o cupom, tente novamente.');
      console.log(err);
    }
  }

  const handleEdit = (coupon: Coupon): void => {
    dispatch(setCouponToEdit(coupon));
    router.push('/Admin/Coupons/Edit');
  }

  if (error) {
    toast.error('Erro ao listar cupons.');
    console.log(error);
  }

  return (
    <AdminComponent>
      <TitleAdminPanel 
        title="Cupons" 
        path="Dashboard > Cupons" 
        icon={faTicketAlt} 
        newPath="/Admin/Coupons/New"
      />

      <AdminDeleteModal handleClose={handleClose} show={show} target="cupom" />

      {
        data && data.coupons && data.coupons.length > 0 ? (
          <AdminListTable 
            first_title="Nome" 
            second_title="Código" 
            third_title="Status" 
            fourth_title="Valor de Desconto"  
            sixth_title="Válido Até"
            meta={data.meta}
          >
            {
              data.coupons.map(coupon => (
                <tr key={coupon.id}>
                  <td>{coupon.name}</td>
                  <td>{coupon.code}</td>
                  <td>{coupon.status === 'inactive' ? 'Inativo' : 'Ativo'}</td>
                  <td>{coupon.discount_value}%</td>
                  <td>{coupon.due_date.split('T')[0]}</td>
                  
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faEdit} 
                        onClick={() => handleEdit(coupon)}
                      />
                    </div>
                  </td>
                  <td>
                    <div>
                      <FontAwesomeIcon 
                        icon={faTrash} 
                        onClick={() => handleShow(coupon.id)} 
                      />
                    </div>
                  </td>
                </tr>
              ))
            }
          </AdminListTable>
        ) : (
          <NoData />
        )
      }
    </AdminComponent>
  )
}

export default withAuthAdmin(List);