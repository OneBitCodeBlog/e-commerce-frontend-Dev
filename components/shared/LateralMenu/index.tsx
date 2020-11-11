import React from 'react';
import styles from '../../../styles/MenuLateral.module.css';
import Logo from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const LateralMenu: React.FC = () => {
    return(
        <div className={styles.background}>
            <Logo />

            <div className={styles.list}>
                <FontAwesomeIcon icon={faSignal} color="var(--color-gray-light)" className="mr-3" />
                Painel Inicial
                <hr />

                <FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="mr-3" />
                Usuários
                <hr />

                <FontAwesomeIcon icon={faGamepad} color="var(--color-gray-light)" className="mr-3" />
                Produtos
                <hr />

                <FontAwesomeIcon icon={faCheckSquare} color="var(--color-gray-light)" className="mr-3" />
                Categorias
                <hr />

                <FontAwesomeIcon icon={faLaptop} color="var(--color-gray-light)" className="mr-3" />
                Requisitos do sistema
                <hr />

                <FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="mr-3" />
                Cupons
                <hr />

                <FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="mr-3" />
                Financeiro
                <hr />

                <FontAwesomeIcon icon={faSignOutAlt} color="var(--color-gray-light)" className="mr-3" />
                Sair
                <hr />
            </div>
        </div>
    )
}

export default LateralMenu;