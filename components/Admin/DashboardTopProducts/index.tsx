import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.css';
import useSwr from 'swr';
import DashboardTopProductService from "../../../services/dashboardTopProducts";
import { toast } from "react-toastify";

import { useSelector } from 'react-redux';
import Dashboard from "../../../dtos/Dashboard";

const defaultUrl = '/admin/v1/dashboard/top_five_products';

const DashboardTopProducts: React.FC = () => {
  const { min_date, max_date }: Dashboard = useSelector(state => state.dashboard);
  
  const { data, error } = useSwr(
    () => defaultUrl +
      ((min_date || max_date) ?
      `?min_date=${min_date}&max_date=${max_date}` : ''),
    DashboardTopProductService.index
  );

  if (error) {
    toast.error('Erro ao obter os dados para os top 5 produtos.');
    console.log(error);
  }

  return (
    <div className={styles.container}>
      <p>Top 5 mais vendidos</p>

      {
        data?.map(
          (product, index) =>
            <div key={index} className={styles.product}>
              <img src={product?.image} alt={product?.product} />
              
              <div>
                <div>
                  <span>{product?.product}</span>
                </div>

                <div>
                  <span>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    {product?.quantity}
                  </span>

                  <span>
                    <FontAwesomeIcon icon={faDollarSign}/>
                    {product?.total_sold}
                  </span>
                </div>
              </div>
            </div>
        )
      }
    </div>
  );
}

export default DashboardTopProducts;