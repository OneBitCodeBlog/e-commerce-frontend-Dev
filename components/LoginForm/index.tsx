import { useState } from 'react';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../shared/BlueBackground';
import Link from 'next/link';
import { useAuth } from '../../contexts/auth';

interface LoginProps {
    titlePhrase: String,
    buttonPhrase: String
}

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const { signIn } = useAuth();

    return (
        <div>
            <Row>
                <Col lg={{span: 6, offset: 3}} md={{span: 8, offset: 2}}>
                    <BlueBackground>
                        <h4>{ titlePhrase }</h4>

                        <InputGroup className="mt-3">
                            <FormControl 
                                placeholder="Meu e-mail" 
                                value={email}
                                onChange={(evt) => setEmail(evt.target.value)}
                                />
                        </InputGroup>

                        <InputGroup className="mt-3">
                            <FormControl 
                                placeholder="Senha" 
                                value={password}
                                type="password"
                                onChange={(evt) => setPassword(evt.target.value)}/>
                        </InputGroup>

                        <Button className="btn btn-info mt-3 w-100" onClick={async() => {
                            await signIn({email, password});
                        }}>{ buttonPhrase }</Button>

                        <br />

                        <Link href="/Auth/PasswordRecovery">Esqueci minha senha</Link> <br />
                    </BlueBackground>
                </Col>
            </Row>
        </div>
    )
}

export default LoginForm;