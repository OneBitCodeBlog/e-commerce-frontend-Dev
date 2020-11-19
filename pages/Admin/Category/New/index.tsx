import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { Form } from 'react-bootstrap';
import { faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminPanel.module.css';
import StyledButton from '../../../../components/shared/StyledButton';

import withAuthAdmin from '../../../../components/withAuthAdmin';

const New: React.FC = () => {
    return (
        <AdminComponent>
            <TitleAdminPanel title="Adicionar Categoria" path="Dashboard > Categorias > Adicionar Categoria" />

            <div className={styles.admin_panel}>
                <Form className={styles.new_form}>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu Nome" className={styles.secundary_input} />
                </Form>

                <div className={styles.details_button}>
                    <StyledButton icon={faUserPlus} action={"Atualizar"} type_button="blue" />
                    <StyledButton icon={faTimes} action={"Cancelar"} type_button="red" />
                </div>
            </div>
        </AdminComponent>
    )
}

export default withAuthAdmin(New);