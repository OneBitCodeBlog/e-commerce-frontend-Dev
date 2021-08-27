import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import styles from './styles.module.css';

import DashboardSummary from '../DashboardSummary';
import DashboardGraphic from "../DashboardSalesRange";
import DashboardTopProducts from "../DashboardTopProducts";

import { useDispatch } from 'react-redux';
import { updateDates } from '../../../store/modules/admin/dashboard/reducer';
import { addDays, format } from "date-fns";

const Dashboard: React.FC = () => {
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const dispatch = useDispatch();

  const handleSetDates = (days: number) => {
    setMinDate(format(addDays(new Date(), - days), 'yyyy-MM-dd'));
    setMaxDate(format(new Date(), 'yyyy-MM-dd'));
  }

  useEffect(() => {
    dispatch(updateDates({ min_date: minDate, max_date: maxDate }));
  }, [minDate, maxDate])

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
              <button onClick={() => handleSetDates(7)}>
                7 dias
              </button>
              <button onClick={() => handleSetDates(15)}>
                15 dias
              </button>
              <button onClick={() => handleSetDates(30)}>
                30 dias
              </button>
            </div>

            <div>
              <span>de</span>
              <input 
                type="date" 
                value={minDate}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => 
                    setMinDate(evt.currentTarget.value)
                }
              />
              <span>até</span>
              <input 
                type="date" 
                value={maxDate}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => 
                    setMaxDate(evt.currentTarget.value)
                }
              />
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