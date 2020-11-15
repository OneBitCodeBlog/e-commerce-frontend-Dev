import React from 'react';
import styles from '../../../styles/AdminPanel.module.css';
import { Table } from 'react-bootstrap';
import StyledButton from '../StyledButton';
interface AdminListTableProps {
    first_title: String,
    second_title?: String,
    third_title?: String,
    fourth_title?: String,
    fifth_title?: String,
    sexth_title?: String
}

const AdminListTable: React.FC<AdminListTableProps> = ({children, first_title, second_title, third_title, fourth_title, fifth_title, sexth_title}) => {
    return (
        <div className={styles.admin_panel}>
            <Table borderless={true} hover={true} responsive={true}>
                <thead>
                    <tr>
                        { first_title && <th>{first_title}</th>}
                        { second_title && <th>{second_title}</th>}
                        { third_title && <th>{third_title}</th>}
                        { fourth_title && <th>{fourth_title}</th>}
                        { fifth_title && <th>{fifth_title}</th>}
                        { sexth_title && <th>{sexth_title}</th>}
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    { children }
                </tbody>
            </Table>

            <div className="pagination justify-content-end">
                <div className="pagination">
                    <StyledButton action="<" type_button="blue" />
                    <StyledButton action="1" type_button="blue" />
                    <StyledButton action="2" type_button="blue" />
                    <StyledButton action="3" type_button="blue" />
                    ...
                    <StyledButton action="31" type_button="blue" />
                    <StyledButton action=">" type_button="blue" />
                </div>
            </div>
        </div>
    )
}

export default AdminListTable;