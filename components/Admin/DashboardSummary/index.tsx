import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGamepad, faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.css';
import useSwr from 'swr';
import DashboardSummaryService from "../../../services/dashboardSumarry";
import { toast } from 'react-toastify';

const DashboardSummary: React.FC = () => {
  const { data, error } = useSwr('/admin/v1/dashboard/summaries', DashboardSummaryService.index);

  if (error) {
    toast.error('Erro ao obter os dados para o resumo do dashboard.');
    console.log(error);
  }

  return (
    <Row>
      <Col>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faUser} size="2x"/>
          <div>
            <span>+ {data?.users}</span>
            <span>Usuários</span>
          </div>
        </div>
      </Col>

      <Col>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faGamepad} size="2x"/>
          <div>
            <span>+ {data?.products}</span>
            <span>Produtos</span>
          </div>
        </div>
      </Col>

      <Col>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faShoppingCart} size="2x"/>
          <div>
            <span>+ {data?.orders}</span>
            <span>Vendas</span>
          </div>
        </div>
      </Col>

      <Col>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faDollarSign} size="2x"/>
          <div>
            <span>R$ {data?.profit}</span>
            <span>Lucro Total</span>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default DashboardSummary;