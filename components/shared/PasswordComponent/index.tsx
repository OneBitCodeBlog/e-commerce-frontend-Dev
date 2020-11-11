import React from 'react';
import BlueBackground from '../BlueBackground';
import { Row, Col } from 'react-bootstrap';

const PasswordComponent: React.FC = ({children}) => {
    return (
        <Row>
            <Col lg={{span: 4, offset: 4}} md={{span: 8, offset: 2}} className="text-center mt-4">
                <BlueBackground>
                    <h3>Recuperar senha</h3>

                    {children}
                </BlueBackground>
            </Col>
        </Row>
    )
}

export default PasswordComponent;