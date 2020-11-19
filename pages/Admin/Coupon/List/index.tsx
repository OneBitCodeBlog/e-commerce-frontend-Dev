import React, { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import AdminListTable from '../../../../components/shared/AdminListTable';
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';
import styles from '../../../../styles/AdminPanel.module.css';

import withAuthAdmin from '../../../../components/withAuthAdmin';

const List: React.FC = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <AdminComponent>
            <TitleAdminPanel title="Cupons" path="Dashboard > Cupons" icon={faTicketAlt} />

            <AdminDeleteModal handleClose={handleClose} show={show} target="cupom" />

            <AdminListTable first_title="Nome" second_title="Código" third_title="Status" fourth_title="Valor de Desconto" fifth_title="Quantidade máxima de uso" sixth_title="Válido Até">
                <tr className={styles.table_line}>
                    <td>Black Friday</td>
                    <td>#000001</td>
                    <td>Disponível</td>
                    <td>R$ 30,00</td>
                    <td>2000</td>
                    <td>25/11/2020</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Black Friday</td>
                    <td>#000001</td>
                    <td>Disponível</td>
                    <td>R$ 30,00</td>
                    <td>2000</td>
                    <td>25/11/2020</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Black Friday</td>
                    <td>#000001</td>
                    <td>Disponível</td>
                    <td>R$ 30,00</td>
                    <td>2000</td>
                    <td>25/11/2020</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Black Friday</td>
                    <td>#000001</td>
                    <td>Disponível</td>
                    <td>R$ 30,00</td>
                    <td>2000</td>
                    <td>25/11/2020</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>
            </AdminListTable>
        </AdminComponent>
    )
}

export default withAuthAdmin(List);