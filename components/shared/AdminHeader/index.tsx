import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from '../../../styles/AdminHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faUserCircle } from '@fortawesome/free-solid-svg-icons';

interface AdminHeaderProps {
    name: string
}

const AdminHeader: React.FC<AdminHeaderProps> = ({name}) => {
    return(
        <Row className={styles.background}>
            <Col lg={6} xs={9}>
                <FontAwesomeIcon icon={faSignal} color="var(--color-gray-light)" className="ml-3" />
                <FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="ml-3" />
                <FontAwesomeIcon icon={faGamepad} color="var(--color-gray-light)" className="ml-3" />
                <FontAwesomeIcon icon={faCheckSquare} color="var(--color-gray-light)" className="ml-3" />
                <FontAwesomeIcon icon={faLaptop} color="var(--color-gray-light)" className="ml-3" />
                <FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="ml-3" />
                <FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="ml-3" />
            </Col>

            <Col lg={6} xs={3} className="d-none d-md-block">
                <div className="float-right">
                    <span className={styles.name}>{ name }</span>
                    <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
                </div>
            </Col>
        </Row>
    )
}

export default AdminHeader;