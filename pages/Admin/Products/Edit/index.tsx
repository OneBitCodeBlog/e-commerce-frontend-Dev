import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { Form, Col, Row } from 'react-bootstrap';
import { faTimes, faArrowUp, faTrash, faGamepad } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminPanel.module.css';
import StyledButton from '../../../../components/shared/StyledButton';
import Image from 'next/image';

import withAuthAdmin from '../../../../components/withAuthAdmin';

const Edit: React.FC = () => {
    return (
        <AdminComponent>
            <TitleAdminPanel title="Editar Produto" path="Dashboard > Produtos > Detalhes do produto > Editar produto" />

            <div className={styles.admin_panel}>
                <Row>
                    <Col lg={4}>
                        <Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />

                        <div className={styles.details_button}>
                            <StyledButton icon={faArrowUp} action={"Atualizar"} type_button="blue" />
                            <StyledButton icon={faTrash} action={"Excluir"} type_button="red" />
                        </div>
                    </Col>

                    <Col lg={8}>
                        <Form className={styles.new_form}>
                            <Form.Row>
                                <Form.Group as={Col} className="p-4">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control type="text" placeholder="Digite o Nome" className={styles.secundary_input} />
                                </Form.Group>

                                <Form.Group as={Col} className="p-4">
                                    <Form.Label>Código</Form.Label>
                                    <Form.Control type="text" placeholder="Digite o ID" className={styles.secundary_input} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} className="p-4">
                                    <Form.Label>Categorias</Form.Label>
                                    <Form.Control as="select" className={styles.secundary_input}>
                                        <option>Selecionar</option>
                                        <option>História</option>
                                        <option>Aventura</option>
                                        <option>Mundo aberto</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} className="p-4">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control as="select" className={styles.secundary_input}>
                                        <option>Disponível</option>
                                        <option>Indisponível</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>

                <div className={styles.details_button}>
                    <StyledButton icon={faGamepad} action={"Atualizar"} type_button="blue" />
                    <StyledButton icon={faTimes} action={"Cancelar"} type_button="red" />
                </div>
            </div>
        </AdminComponent>
    )
}

export default withAuthAdmin(Edit);