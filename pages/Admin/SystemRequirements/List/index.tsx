import React, { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faHeadset } from '@fortawesome/free-solid-svg-icons';
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
            <TitleAdminPanel title="Requisitos" path="Dashboard > Requisitos" icon={faHeadset} />

            <AdminDeleteModal handleClose={handleClose} show={show} target="cupom" />

            <AdminListTable first_title="Nome" second_title="Sistema Operacional" third_title="Armazenamento" fourth_title="Processador" fifth_title="Memória" sixth_title="Placa de vídeo">
                <tr className={styles.table_line}>
                    <td>Básico</td>
                    <td>Windows</td>
                    <td>4GB</td>
                    <td>4Gz Intel Core 7</td>
                    <td>4GB</td>
                    <td>Nvidia Geforce</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Básico</td>
                    <td>Windows</td>
                    <td>4GB</td>
                    <td>4Gz Intel Core 7</td>
                    <td>4GB</td>
                    <td>Nvidia Geforce</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Básico</td>
                    <td>Windows</td>
                    <td>4GB</td>
                    <td>4Gz Intel Core 7</td>
                    <td>4GB</td>
                    <td>Nvidia Geforce</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Básico</td>
                    <td>Windows</td>
                    <td>4GB</td>
                    <td>4Gz Intel Core 7</td>
                    <td>4GB</td>
                    <td>Nvidia Geforce</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>
            </AdminListTable>
        </AdminComponent>
    )
}

export default withAuthAdmin(List);