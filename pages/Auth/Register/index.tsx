import { useState } from 'react';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../../../components/shared/BlueBackground';
import MainComponent from '../../../components/shared/MainComponent';

import api from '../../../services/api';

import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const router = useRouter();

  const signUp = async({ 
    name, 
    email, 
    password, 
    password_confirmation 
  }: SignUpCredentials): Promise<void> => {
    try {
      await api.post('/auth/v1/user', {
        name,
        email,
        password,
        password_confirmation
      });

      toast.success('Registro realizado com sucesso!');

      router.push('/Auth/Login');
    } catch(err) {
      if(err.response.data.errors) {
        toast.warning(err.response.data.errors.full_messages[0]);
      }
      console.log(err.response);
    }
  } 

  const handleSubmit = async(evt: React.FormEvent):Promise<void> => {
    evt.preventDefault();

    if(password !== passwordConfirmation) {
      toast.error('A senha e a confirmação de senha devem ser iguais!')
      return;
    }
    await signUp({ name, email, password, password_confirmation: passwordConfirmation });
  }

  return (
    <MainComponent>
      <div className="p-4 text-center">

        <h2>Registrar</h2>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
            <BlueBackground>
              <h4>Criar nova conta</h4>

              <form onSubmit={handleSubmit}>
                <InputGroup className="mt-3">
                  <FormControl 
                    placeholder="Meu Nome"
                    type="text"
                    value={name}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setName(evt.target.value)
                    }
                    required
                  />
                </InputGroup>

                <InputGroup className="mt-3">
                  <FormControl 
                    placeholder="Meu e-mail" 
                    type="email"
                    value={email}
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
                    type="password"
                    value={password}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setPassword(evt.target.value)
                    }
                    required
                  />
                </InputGroup>

                <InputGroup className="mt-3">
                  <FormControl 
                    placeholder="Confirmação de senha" 
                    type="password"
                    value={passwordConfirmation}
                    onChange={
                      (evt: React.ChangeEvent<HTMLInputElement>) => 
                        setPasswordConfirmation(evt.target.value)
                    }
                    required
                  />
                </InputGroup>

                <Button type="submit" className="btn btn-info mt-3 w-100">CRIAR</Button>
              </form>
            </BlueBackground>
          </Col>
        </Row>
      </div>
    </MainComponent>
  )
}

export default Register;