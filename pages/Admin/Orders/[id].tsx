import MainComponent from "../../../components/shared/MainComponent";
import StyledButton from "../../../components/shared/StyledButton";

import styles from './styles.module.css';

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from 'next/router';

import withAuthAdmin from "../../../components/withAuthAdmin";
import OrderDetail from "../../../components/shared/OrderDetail";

import OrderService from "../../../services/order";
import useSwr from 'swr';
import { toast } from "react-toastify";

const Order: React.FC = () => {
  const router = useRouter();
  const { id } = router?.query;

  const { data, error } = useSwr(
    () => id ? `/admin/v1/orders/${id}` : null, OrderService.show
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
            action={"Voltar aos pedidos"}
            icon={faArrowLeft}
            type_button="blue"
            onClick={() => router.back()}
            type="button"
          />
        </div>
      </div>

      <OrderDetail items={data?.line_items}/>
    </MainComponent>
  );
}

export default withAuthAdmin(Order);