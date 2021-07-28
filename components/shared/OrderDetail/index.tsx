import { Row, Col, Badge } from "react-bootstrap";
import BlueBackground from "../BlueBackground";

import styles from './styles.module.css';

import OrderItem from '../../../dtos/OrderItem';

interface OrderDetailProps {
  items: OrderItem[];
}

const OrderDetail: React.FC<OrderDetailProps> = ({items}) => {
  return (
    <BlueBackground>
      <strong>PRODUTO</strong>
      <strong className="float-right">VALOR</strong>

      {
        items?.map(
          (item, index) =>
            <div key={index}>
              <hr className={styles.line} />

              <Row className={styles.product}>
                <Col
                  sm={3}
                  xs={12}
                  className="text-center"
                >
                  <img 
                    src={item?.image_url} 
                    alt={item?.product} 
                  />
                </Col>

                <Col sm={7} xs={9}>
                  <strong className={styles.product_name}>
                    {item?.product}
                  </strong>

                  <div>
                    {
                      item?.categories?.map(
                        (category, index) =>
                          <Badge 
                            key={index}
                            variant="primary ml-1" 
                            className={styles.primary_badge}
                          >
                            {category}
                          </Badge>
                      )
                    }
                  </div>

                </Col>

                <Col sm={2} xs={3} className="text-center">
                  <strong className={styles.price}>
                    {item?.payed_price}
                  </strong>
                </Col>
              </Row>
            </div>
        )
      }
    </BlueBackground>
  )
}

export default OrderDetail;