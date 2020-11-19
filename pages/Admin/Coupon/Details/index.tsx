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
            <TitleAdminPanel title="Detalhes do Cupom" path="Dashboard > Cupons > Detalhes do cupom" />

            <div className={styles.admin_panel}>
                <Row style={{'textAlign': 'left'}}>
                    <Col lg={6}>
                        <h6 className="m-4">Nome: Black Friday</h6>
                        <h6 className="m-4">Código: #00001</h6>
                        <h6 className="m-4">Quantidade máxima de uso: 2000</h6>
                    </Col>

                    <Col lg={6}>
                        <h6 className="m-4">Status: Disponível</h6>
                        <h6 className="m-4">Valor de desconto: R$ 30,00</h6>
                        <h6 className="m-4">Válido Até: 25/11/2020</h6>
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