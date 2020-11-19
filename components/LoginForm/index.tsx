import { useState } from 'react';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../shared/BlueBackground';
import Link from 'next/link';
import api from '../../services/api';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { setLoggedUser } from '../../store/modules/auth/reducer';

interface LoginProps {
    titlePhrase: String,
    buttonPhrase: String,
    setLoggedUser(user): void,
}

interface SignInData {
    email: string;
    password: string;
}

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();

    const signIn = async ({ email, password }: SignInData): Promise<void> => {
        try {
          api.defaults.headers = {}
          const response = await api.post('auth/v1/user/sign_in', {
            email,
            password
          })
      
          const { id, email: userEmail, name, profile} = response.data.data;
      
          const user = {
            id,
            name,
            email: userEmail,
            profile: profile
          };
      
          dispatch(setLoggedUser(user));

          router.push(user.profile === 'admin' ? '/Admin/' : '/')
        } catch(err) {
          console.log(err)
        }
      }

    const handleSubmit = async (evt): Promise<void> => {
        evt.preventDefault();
        await signIn({email, password});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={{span: 6, offset: 3}} md={{span: 8, offset: 2}}>
                        <BlueBackground>
                            <h4>{ titlePhrase }</h4>

                            <InputGroup className="mt-3">
                                <FormControl 
                                    placeholder="Meu e-mail" 
                                    value={email}
                                    type="email"
                                    onChange={(evt) => setEmail(evt.target.value)}
                                    required
                                    />
                            </InputGroup>

                            <InputGroup className="mt-3">
                                <FormControl 
                                    placeholder="Senha" 
                                    value={password}
                                    type="password"
                                    onChange={(evt) => setPassword(evt.target.value)}
                                    required
                                    />
                            </InputGroup>

                            <Button type="submit" className="btn btn-info mt-3 w-100">{ buttonPhrase }</Button>

                            <br />

                            <Link href="/Auth/PasswordRecovery">Esqueci minha senha</Link> <br />
                        </BlueBackground>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default LoginForm;