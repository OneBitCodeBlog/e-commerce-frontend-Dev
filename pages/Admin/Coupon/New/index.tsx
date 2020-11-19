import React from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { Form, Col } from 'react-bootstrap';
import { faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminPanel.module.css';
import StyledButton from '../../../../components/shared/StyledButton';

import withAuthAdmin from '../../../../components/withAuthAdmin';

const New: React.FC = () => {
    return (
        <AdminComponent>
            <TitleAdminPanel title="Adicionar Cupom" path="Dashboard > Cupons > Adicionar cupom" />

            <div className={styles.admin_panel}>
                <Form className={styles.new_form}>
                    <Form.Row>
                        <Form.Group as={Col} className="p-4">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite o Nome" className={styles.secundary_input} />
                        </Form.Group>

                        <Form.Group as={Col} className="p-4">
                            <Form.Label>Código</Form.Label>
                            <Form.Control type="text" placeholder="Digite o Código" className={styles.secundary_input} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} className="p-4">
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" placeholder="Digite o Status" className={styles.secundary_input} />
                        </Form.Group>

                        <Form.Group as={Col} className="p-4">
                            <Form.Label>Valor de Desconto</Form.Label>
                            <Form.Control type="text" placeholder="Ex. 20,00" className={styles.secundary_input} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} className="p-4">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control type="number" min="1" placeholder="Digite a Quantidade" className={styles.secundary_input} />
                        </Form.Group>

                        <Form.Group as={Col} className="p-4">
                            <Form.Label>Validade</Form.Label>
                            <Form.Control type="date" placeholder="Digite a data" className={styles.secundary_input} />
                        </Form.Group>
                    </Form.Row>
                </Form>

                <div className={styles.details_button}>
                    <StyledButton icon={faUserPlus} action={"Adicionar"} type_button="blue" />
                    <StyledButton icon={faTimes} action={"Cancelar"} type_button="red" />
                </div>
            </div>
        </AdminComponent>
    )
}

export default withAuthAdmin(New);