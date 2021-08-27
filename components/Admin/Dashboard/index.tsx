import { Row, Col } from "react-bootstrap";
import styles from './styles.module.css';

import DashboardSummary from '../DashboardSummary';
import DashboardGraphic from "../DashboardSalesRange";
import DashboardTopProducts from "../DashboardTopProducts";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <Row>
          <Col lg="5" md="12">
            <h1>Página inicial</h1>
            <span>Dashboard / Painel Inicial</span>
          </Col>

          <Col lg="7" md="12">
            <div>
              <button>7 dias</button>
              <button>15 dias</button>
              <button>30 dias</button>
            </div>

            <div>
              <span>de</span>
              <input type="date" />
              <span>até</span>
              <input type="date" />
            </div>
          </Col>
        </Row>
      </div>

      <DashboardSummary />

      <Row className="mt-4 mb-2">
        <Col md="7" xs="12" className="mb-3">
          <DashboardGraphic />
        </Col>

        <Col md="5" xs="12" className="mb-3">
          <DashboardTopProducts/>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard;