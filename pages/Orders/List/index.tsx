import MainComponent from "../../../components/shared/MainComponent";
import Menu from "../../../components/Storefront/Menu";
import BlueBackground from "../../../components/shared/BlueBackground";

import OrderService from "../../../services/order";
import useSWR from "swr";

import { toast } from "react-toastify";
import withAuth from "../../../components/withAuth";
import OrdersList from "../../../components/shared/OrdersList";

const Orders: React.FC = () => {
  const { data, error } = useSWR('/storefront/v1/orders', OrderService.index);

  if (error) {
    toast.error('Erro ao obter os dados dos pedidos!');
    console.log(error);
  }

  return (
    <MainComponent>
      <Menu tab="orders" />

      <div className="mt-4 mb-4">
        <BlueBackground>
          <OrdersList orders={data}/>
        </BlueBackground>
      </div>
    </MainComponent>
  )
}

export default withAuth(Orders);