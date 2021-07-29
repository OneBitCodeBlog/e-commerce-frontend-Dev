import { useState, useEffect } from "react";
import AdminComponent from "../../../../components/shared/AdminComponent";
import TitleAdminPanel from "../../../../components/shared/TitleAdminPanel";

import styles from './styles.module.css';

import OrdersList from "../../../../components/shared/OrdersList";
import AdminOrdersService from "../../../../services/adminOrders";
import Pagination from "../../../../components/shared/Pagination";

import useSwr from 'swr';
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import UrlService from "../../../../util/UrlService";

import withAuthAdmin from "../../../../components/withAuthAdmin";

const defaultUrl = '/admin/v1/orders';

const Orders: React.FC = () => {
  const[url, setUrl] = useState(defaultUrl);
  const router = useRouter();
  const { data, error } = useSwr(url, AdminOrdersService.index);

  useEffect(() => {
    setUrl(
      defaultUrl +
      UrlService.execute({ page: router?.query?.page })
    );
  }, [router?.query?.page])

  if (error) {
    toast.error('Erro ao obter os dados dos pedidos!');
    console.log(error);
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Vendas" path="Dashboard > Vendas"/>

      <div className={styles.admin_panel}>
        <OrdersList 
          orders={data?.orders}
          admin={true}
        />

        <Pagination {...data?.meta}/>
      </div>
    </AdminComponent>
  );
}

export default withAuthAdmin(Orders);