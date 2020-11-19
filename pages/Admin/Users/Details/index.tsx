import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import StyledButton from '../../../../components/shared/StyledButton';
import styles from '../../../../styles/AdminPanel.module.css';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import withAuthAdmin from '../../../../components/withAuthAdmin';

const Details: React.FC = () => {
    return (
        <AdminComponent>
            <TitleAdminPanel title="Detalhes do Usuário" path="Dashboard > Usuários > Detalhes do usuário" />

            <div className={styles.admin_panel}>
                <Row style={{'textAlign': 'left'}}>
                    <Col lg={6}>
                        <h6 className="m-4">Nome: Leonardo Scorza</h6>
                        <h6 className="m-4">E-mail: contato@onebitcode.com</h6>
                    </Col>

                    <Col lg={6}>
                        <h6 className="m-4">ID: #00001</h6>
                        <h6 className="m-4">Status: Administrador</h6>
                    </Col>
                </Row>

                <div className={styles.details_button}>
                    <StyledButton icon={faEdit} action={"Editar"} type_button="blue" />
                    <StyledButton icon={faTrash} action={"Excluir"} type_button="red" />
                </div>
            </div>
        </AdminComponent>
    )
}

export default withAuthAdmin(Details);