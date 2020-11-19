import React, { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faGhost } from '@fortawesome/free-solid-svg-icons';
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
            <TitleAdminPanel title="Categorias" path="Dashboard > Categorias" icon={faGhost} />

            <AdminDeleteModal handleClose={handleClose} show={show} target="categoria" />

            <AdminListTable first_title="Nome da categoria">
                <tr className={styles.table_line}>
                    <td>Terror</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Suspense</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Mundo Aberto</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Ação</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>
            </AdminListTable>
        </AdminComponent>
    )
}

export default withAuthAdmin(List);