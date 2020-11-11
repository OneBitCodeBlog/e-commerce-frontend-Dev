import React from 'react';
import AdminHeader from '../AdminHeader';
import AdminFooter from '../AdminFooter';
import { Col, Row } from 'react-bootstrap';

const AdminComponent: React.FC = ({children}) => {
    return(
        <Row>
            <Col lg={3}>
                Menu Lateral
            </Col>

            <Col lg={9}>
                <div className="d-flex flex-column sticky-footer-wrapper container">
                    <AdminHeader name="Nome do User" />

                    <div className="flex-fill text-center">
                        { children }
                    </div>

                    <AdminFooter />
                </div>
            </Col>
        </Row>
    )
}

export default AdminComponent;