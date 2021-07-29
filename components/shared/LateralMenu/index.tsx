import React from 'react';
import styles from './styles.module.css';
import Logo from '../Logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';

import SignOutService from '../../../util/SignOutService';

const LateralMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.background}>
      <Logo />

      <div className={styles.list}>
        <Link href="/Admin">
          <a className={`${router.pathname === '/Admin' ? styles.active : ''}`}>
            <FontAwesomeIcon 
              icon={faSignal} 
              color="var(--color-gray-light)" 
              className="mr-3" 
            />
            Painel Inicial
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Users/List">
          <a className={`${router.pathname === '/Admin/Users/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="mr-3" />
            Usuários
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Products/List">
          <a className={`${router.pathname === '/Admin/Products/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faGamepad} color="var(--color-gray-light)" className="mr-3" />
            Produtos
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Categories/List">
          <a className={`${router.pathname === '/Admin/Categories/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faCheckSquare} color="var(--color-gray-light)" className="mr-3" />
            Categorias
            <hr />
          </a>
        </Link>

        <Link href="/Admin/SystemRequirements/List">
          <a className={`${router.pathname === '/Admin/SystemRequirements/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faLaptop} color="var(--color-gray-light)" className="mr-3" />
              Requisitos do sistema
              <hr />
          </a>
        </Link>

        <Link href="/Admin/Coupons/List">
          <a className={`${router.pathname === '/Admin/Coupons/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="mr-3" />
            Cupons
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Orders/List">
          <a className={`${router.pathname === '/Admin/Orders/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="mr-3" />
            Financeiro
            <hr />
          </a>
        </Link>

        <Link href="/Auth/Login">
          <a onClick={SignOutService.execute}>
            <FontAwesomeIcon icon={faSignOutAlt} color="var(--color-gray-light)" className="mr-3" />
            Sair
            <hr />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LateralMenu;