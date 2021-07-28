import MainComponent from "../../components/shared/MainComponent";
import StyledButton from "../../components/shared/StyledButton";

import styles from './styles.module.css';

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';

import withAuth from "../../components/withAuth";
import OrderDetail from "../../components/shared/OrderDetail";
import OrderService from "../../services/order";

import useSwr from 'swr';
import { toast } from "react-toastify";

const Order: React.FC = () => {
  const router = useRouter();
  const { id } = router?.query;

  const { data, error } = useSwr(
    () => id ? `/storefront/v1/orders/${id}` : null, OrderService.show
  );

  if (error) {
    toast.error('Erro ao obter os dados do pedido!');
    console.log(error);
  }

  return (
    <MainComponent>
      <div className="mt-4 mb-4">
        <strong>Pedido</strong>
        <strong className={styles.secondary_color}>{` #${data?.id}`}</strong>

        <div className="float-right">
          <StyledButton 
            action={"Voltar aos meus pedidos"} 
            icon={faArrowLeft} 
            type_button="blue"
            type="button"
            onClick={() => router.back()}
          />
        </div>
      </div>

      <OrderDetail items={data?.line_items}/>
    </MainComponent>
  );
}

export default withAuth(Order);