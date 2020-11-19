import React, { useState } from 'react';
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faGamepad } from '@fortawesome/free-solid-svg-icons';
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
            <TitleAdminPanel title="Produtos" path="Dashboard > Produtos" icon={faGamepad} />

            <AdminDeleteModal handleClose={handleClose} show={show} target="produto" />

            <AdminListTable first_title="Nome do produto" second_title="Categorias" third_title="Código" fourth_title="Status">
                <tr className={styles.table_line}>
                    <td>Ri sem dente evil</td>
                    <td>Terror, Suspense, História</td>
                    <td>#000001</td>
                    <td>Disponível</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Cuphead</td>
                    <td>Ação, Desenho</td>
                    <td>#000002</td>
                    <td>Disponível</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Gran Turismo</td>
                    <td>Corrida, Esportes</td>
                    <td>#000003</td>
                    <td>Indisponível</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>

                <br />

                <tr className={styles.table_line}>
                    <td>Far Cry 4</td>
                    <td>História, Aventura, Mundo Aberto</td>
                    <td>#000003</td>
                    <td>Disponível</td>
                    <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
                    <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
                </tr>
            </AdminListTable>
        </AdminComponent>
    )
}

export default withAuthAdmin(List);