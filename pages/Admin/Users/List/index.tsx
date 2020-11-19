import React, { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
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
            <TitleAdminPanel title="Usuários" path="Dashboard > Usuários" icon={faUserPlus} />

            <AdminDeleteModal handleClose={handleClose} show={show} target="usuário" />

            <AdminListTable first_title="Nome" second_title="Email" third_title="ID" fourth_title="Status">
                <tr className={styles.table_line}>
                    <td>Leonardo Scorza</td>
                    <td>contato@onebitcode.com</td>
                    <td>#000001</td>
                    <td>Administrador</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Leonardo Scorza</td>
                    <td>contato@onebitcode.com</td>
                    <td>#000001</td>
                    <td>Administrador</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Leonardo Scorza</td>
                    <td>contato@onebitcode.com</td>
                    <td>#000001</td>
                    <td>Administrador</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Leonardo Scorza</td>
                    <td>contato@onebitcode.com</td>
                    <td>#000001</td>
                    <td>Administrador</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>
            </AdminListTable>
        </AdminComponent>
    )
}

export default withAuthAdmin(List);