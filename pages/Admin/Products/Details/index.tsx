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
            <TitleAdminPanel title="Detalhes do Produto" path="Dashboard > Produtos > Detalhes do produto" />

            <div className={styles.admin_panel}>
                <Row style={{'textAlign': 'left'}}>
                    <Col lg={4}>
                        <Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />
                    </Col>

                    <Col lg={8}>
                        <Row>
                            <Col lg={6}>
                                <h6 className="m-4">Nome: Far Cry 4</h6>
                                <h6 className="m-4">Categorias: História, Aventura, Mundo Aberto, Ação, Estratégia.</h6>
                            </Col>

                            <Col lg={6}>
                                <h6 className="m-4">Código: #00001</h6>
                                <h6 className="m-4">Status: Disponível</h6>
                            </Col>
                        </Row>
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