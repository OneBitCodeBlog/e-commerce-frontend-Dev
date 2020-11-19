import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { Form } from 'react-bootstrap';
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminPanel.module.css';
import StyledButton from '../../../../components/shared/StyledButton';

import withAuthAdmin from '../../../../components/withAuthAdmin';

const Edit: React.FC = () => {
    return (
        <AdminComponent>
            <TitleAdminPanel title="Editar Categoria" path="Dashboard > Categorias > Detalhes da categoria > Editar categoria" />

            <div className={styles.admin_panel}>
                <Form className={styles.new_form}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu Nome" className={styles.secundary_input} />
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