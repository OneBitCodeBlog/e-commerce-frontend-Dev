import React from 'react';
import styles from '../../../styles/AdminPanel.module.css';
import { Table } from 'react-bootstrap';

interface AdminListTableProps {
    first_title: String,
    second_title: String,
    third_title: String,
    fourth_title: String
}

const AdminListTable: React.FC<AdminListTableProps> = ({children, first_title, second_title, third_title, fourth_title}) => {
    return (
        <div className={styles.admin_panel}>
            <Table borderless={true} hover={true} responsive={true}>
                <thead>
                    <tr>
                        <th>{ first_title }</th>
                        <th>{ second_title }</th>
                        <th>{ third_title }</th>
                        <th>{ fourth_title }</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    { children }
                </tbody>
            </Table>

            <div className="float-right">
                <div className="pagination">
                    Paginação
                </div>
            </div>
        </div>
    )
}

export default AdminListTable;