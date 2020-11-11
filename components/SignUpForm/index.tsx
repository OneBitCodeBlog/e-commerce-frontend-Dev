import React from 'react';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../shared/BlueBackground';

interface SignUpProps {
    titlePhrase: String,
    buttonPhrase: String
}

const SignUpForm: React.FC<SignUpProps> = ({ titlePhrase, buttonPhrase }) => {
    return (
        <div>
            <Row>
                <Col lg={{span: 6, offset: 3}} md={{span: 8, offset: 2}}>
                    <BlueBackground>
                        <h4>{ titlePhrase }</h4>

                        <InputGroup className="mt-3">
                            <FormControl placeholder="Meu Nome" />
                        </InputGroup>

                        <InputGroup className="mt-3">
                            <FormControl placeholder="Meu e-mail" />
                        </InputGroup>

                        <InputGroup className="mt-3">
                            <FormControl placeholder="Senha" />
                        </InputGroup>

                        <Button className="btn btn-info mt-3 w-100">{ buttonPhrase }</Button>
                    </BlueBackground>
                </Col>
            </Row>
        </div>
    )
}

export default SignUpForm;