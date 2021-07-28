import { Table } from 'react-bootstrap';
import styles from './styles.module.css';
import OrderStatusService from '../../../util/OrderStatusService';

import Link from 'next/link';
import OrdersListDTO from '../../../dtos/OrdersList';

interface OrdersListProps {
  orders: OrdersListDTO[];
  admin?: boolean;
}

const OrdersList: React.FC<OrdersListProps> = ({orders, admin=false}) => {
  return (
    <Table 
      borderless={true} 
      hover={true} 
      responsive={true} 
      className={styles.table}
    >
      <thead>
        <tr>
          <th>Número</th>
          <th>Pagamento</th>
          <th>Valor</th>
          <th>Situação</th>
        </tr>
      </thead>

      <tbody>
        {
          orders?.map(
            order => 
              <tr 
                key={order.id}
                className={styles.table_line}
              >
                <td>
                  <Link href={`${(admin ? '/Admin' : '')}/Orders/${order?.id}`}>
                    <a>
                      {`#${order?.id}`}
                    </a>
                  </Link>    
                </td>
                <td>
                  {
                    order?.payment_type === 'billet' ?
                      'Boleto' : 'Cartão de Crédito'
                  }
                </td>
                <td>{`R$ ${order?.total_amount}`}</td>
                <td>{OrderStatusService.execute(order?.status)}</td>
              </tr>
          )
        }
      </tbody>
    </Table>
  )
}

export default OrdersList;