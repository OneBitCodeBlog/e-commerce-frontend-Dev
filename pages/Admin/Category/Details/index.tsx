import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import StyledButton from '../../../../components/shared/StyledButton';
import styles from '../../../../styles/AdminPanel.module.css';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

import withAuthAdmin from '../../../../components/withAuthAdmin';

const Details: React.FC = () => {
    return (
        <AdminComponent>
            <TitleAdminPanel title="Detalhes da categoria" path="Dashboard > Categorias > Detalhes da categoria" />

            <div className={styles.admin_panel}>
                <h6 className="m-4">Nome: Mundo Aberto</h6>

                <div className={styles.details_button}>
                    <StyledButton icon={faEdit} action={"Editar"} type_button="blue" />
                    <StyledButton icon={faTrash} action={"Excluir"} type_button="red" />
                </div>
            </div>
        </AdminComponent>
    )
}

export default withAuthAdmin(Details);