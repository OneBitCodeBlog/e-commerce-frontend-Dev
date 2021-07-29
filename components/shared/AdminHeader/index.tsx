import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import User from '../../../dtos/User';
import SignOutService from '../../../util/SignOutService';

const AdminHeader: React.FC = () => {
  const router = useRouter();

  const { name }: User = useSelector(state => state.auth.loggedUser);

  return (
    <Row className={styles.background}>
      <Col xs={12} className={styles.menu}>
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

        <Link href="/Admin/Orders/List">
          <a>
            <FontAwesomeIcon 
              icon={faDollarSign} 
              color="var(--color-gray-light)" 
              className={`ml-3 ${router.pathname === '/Admin/Orders/List' ? styles.active : ''}`} 
            />
          </a>
        </Link>

        <Link href="/Auth/Login">
          <a
            onClick={SignOutService.execute}
            onTouchEnd={() => SignOutService.execute()}
          >
            <FontAwesomeIcon 
              icon={faSignOutAlt} 
              color="var(--color-gray-light)" 
              className="ml-3" />
          </a>
        </Link>

        <Link href="/Profile">
          <a className={styles.profile}>
            <span className={styles.name}>{name}</span>
            <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
          </a>
        </Link>
      </Col>
    </Row>
  )
}

export default AdminHeader;