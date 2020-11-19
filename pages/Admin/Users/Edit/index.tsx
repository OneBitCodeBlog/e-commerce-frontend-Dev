import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { Form, Col } from 'react-bootstrap';
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminPanel.module.css';
import StyledButton from '../../../../components/shared/StyledButton';

import withAuthAdmin from '../../../../components/withAuthAdmin';

const Edit: React.FC = () => {
    return (
        <AdminComponent>
            <TitleAdminPanel title="Editar Usuário" path="Dashboard > Usuários > Detalhes do usuário > Editar usuário" />

            <div className={styles.admin_panel}>
                <Form className={styles.new_form}>
                    <Form.Row>
                        <Form.Group as={Col} className="p-4">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu Nome" className={styles.secundary_input} />
                        </Form.Group>

                        <Form.Group as={Col} className="p-4">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu ID" className={styles.secundary_input} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} className="p-4">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu email" className={styles.secundary_input} />
                        </Form.Group>

                        <Form.Group as={Col} className="p-4">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" className={styles.secundary_input}>
                                <option>Administrador</option>
                                <option>Cliente</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>

                <div className={styles.details_button}>
                    <StyledButton icon={faUser} action={"Atualizar"} type_button="blue" />
                    <StyledButton icon={faTimes} action={"Cancelar"} type_button="red" />
                </div>
            </div>
        </AdminComponent>
    )
}

export default withAuthAdmin(Edit);