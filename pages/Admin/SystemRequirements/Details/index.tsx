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
            <TitleAdminPanel title="Detalhes do Requisito" path="Dashboard > Requisitos > Detalhes do requisito" />

            <div className={styles.admin_panel}>
                <Row style={{'textAlign': 'left'}}>
                    <Col lg={6}>
                        <h6 className="m-4">Nome: Básico</h6>
                        <h6 className="m-4">Sistema Operacional: Windows</h6>
                        <h6 className="m-4">Armazenamento: 4GB</h6>
                    </Col>

                    <Col lg={6}>
                        <h6 className="m-4">Processador: 4Gz Intel Core 7</h6>
                        <h6 className="m-4">Memória: 4GB</h6>
                        <h6 className="m-4">Placa de vídeo: Nvidia Geforce</h6>
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