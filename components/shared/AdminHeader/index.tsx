import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { useRouter } from 'next/router';

interface AdminHeaderProps {
  name: string
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ name }) => {
  const router = useRouter();

  return (
    <Row className={styles.background}>
      <Col lg={6} xs={12} className={styles.menu}>
        <Link href="/Admin">
          <a>
            <FontAwesomeIcon 
              icon={faSignal} 
              color="var(--color-gray-light)" 
              className={`ml-3 ${router.pathname === '/Admin' ? styles.active : ''}`} 
            />
          </a>
        </Link>
        <Link href="/Admin/Users/List">
          <a>
            <FontAwesomeIcon 
              icon={faUser} 
              color="var(--color-gray-light)" 
              className={`ml-3 ${router.pathname === '/Admin/Users/List' ? styles.active : ''}`}
            />
          </a>
        </Link>
        <Link href="/Admin/Products/List">
          <a>
            <FontAwesomeIcon 
              icon={faGamepad} 
              color="var(--color-gray-light)" 
              className={`ml-3 ${router.pathname === '/Admin/Products/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>
        <Link href="/Admin/Categories/List">
          <a>
            <FontAwesomeIcon 
              icon={faCheckSquare}
              color="var(--color-gray-light)" 
              className={`ml-3 ${router.pathname === '/Admin/Categories/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>
        <Link href="/Admin/SystemRequirements/List">
          <a>
            <FontAwesomeIcon 
              icon={faLaptop} 
              color="var(--color-gray-light)" 
              className={`ml-3 ${router.pathname === '/Admin/SystemRequirements/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>
        <Link href="/Admin/Coupons/List">
          <a>
            <FontAwesomeIcon 
              icon={faTicketAlt} 
              color="var(--color-gray-light)" 
              className={`ml-3 ${router.pathname === '/Admin/Coupons/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>
        <Link href="#"><a><FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="ml-3" /></a></Link>
      </Col>

      <Col lg={6} xs={3} className={styles.profile}>
        <span className={styles.name}>{name}</span>
        <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
      </Col>
    </Row>
  )
}

export default AdminHeader;