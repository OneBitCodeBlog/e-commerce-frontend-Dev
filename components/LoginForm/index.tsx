import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../shared/BlueBackground';

import { setLoggedUser } from '../../store/modules/auth/reducer';

import Link from 'next/link';

import UsersService from '../../services/users';

import { toast } from 'react-toastify';

import AuthState from '../../dtos/AuthState';
import User from '../../dtos/User';

interface LoginProps {
  titlePhrase: string;
  buttonPhrase: string;
}

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const loggedUser: User = useSelector((state: AuthState) => state.auth.loggedUser);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if(loggedUser) {
      setEmail(loggedUser.email);
      if(passwordRef && passwordRef.current) {
        passwordRef.current.focus();
      }
    }
  }, [loggedUser])

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();
    
    try {
      const response = await UsersService.signIn({ email, password });

      const { id, email: userEmail, name, profile } = response.data.data;

      const user = {
        id,
        name,
        email: userEmail,
        profile: profile
      };

      dispatch(setLoggedUser(user));

      toast.info('Login realizado com sucesso!');

      if (router.query.callback) {
        router.push(decodeURIComponent(router.query.callback.toString()));
      } else {
        router.push(user.profile === 'admin' ? '/Admin' : '/')
      }
    } catch (err) {
      toast.error('E-mail ou senha inválidos!');
    }
  }
  return (

    <form onSubmit={handleSubmit}>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
          <BlueBackground>
            <h4>{titlePhrase}</h4>


            <InputGroup className="mt-3">
              <FormControl
                placeholder="Meu e-mail"
                value={email}
                type="email"
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(evt.target.value)
                }
                required
              />
            </InputGroup>

            <InputGroup className="mt-3">
              <FormControl
                placeholder="Senha"
                value={password}
                type="password"
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(evt.target.value)
                }
                required
                ref={passwordRef}
              />
            </InputGroup>

            <Button type="submit" className="btn btn-info mt-3 w-100">{buttonPhrase}</Button>

            <br />

            <Link href="/Auth/PasswordRecovery">Esqueci minha senha</Link> <br />
          </BlueBackground>
        </Col>
      </Row>
    </form>
  )
}

export default LoginForm;