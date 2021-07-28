import { Col, Row } from 'react-bootstrap';

import styles from './styles.module.css';
import Link from 'next/link';

interface MenuProps {
  tab?: string;
}

const Menu: React.FC<MenuProps> = ({ tab }) => {
  return (
    <Row className={`mt-4 mb-4 text-center ${styles.container}`}>
      <Col sm={3} xs={6}>
        <Link href="/Profile">
          <a className={(tab === 'personal_data' ? styles.active : undefined)}>
            Meus Dados
          </a> 
        </Link>
      </Col>

      <Col sm={3} xs={6}>
        <Link href="/Orders/List">
          <a className={(tab === 'orders' ? styles.active : undefined)}>
            Meus Pedidos
          </a>
        </Link>
      </Col>

      <Col sm={3} xs={6}>
        <Link href="/Games">
          <a className={(tab === 'my_games' ? styles.active : undefined)}>
            Meus Games
          </a>
        </Link>
      </Col>

      <Col sm={3} xs={6}>
        <Link href="/Wishlist">
          <a className={(tab === 'desired_games' ? styles.active : undefined)}>
            Games Desejados
          </a>
        </Link>
      </Col>
    </Row>
  );
}

export default Menu;