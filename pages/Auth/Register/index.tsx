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
      console.log(err.response)
    }
  } 

  const handleSubmit = async(evt):Promise<void> => {
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
                    type="text"
                    required
                    placeholder="Meu Nome"
                    value={name}
                    onChange={evt => setName(evt.target.value)}
                  />
                </InputGroup>

                <InputGroup className="mt-3">
                  <FormControl 
                    type="email"
                    required
                    placeholder="Meu e-mail" 
                    value={email}
                    onChange={evt => setEmail(evt.target.value)}
                  />
                </InputGroup>

                <InputGroup className="mt-3">
                  <FormControl 
                    type="password"
                    required
                    placeholder="Senha" 
                    value={password}
                    onChange={evt => setPassword(evt.target.value)}
                  />
                </InputGroup>

                <InputGroup className="mt-3">
                  <FormControl 
                    type="password"
                    required
                    placeholder="Confirmação de senha" 
                    value={passwordConfirmation}
                    onChange={evt => setPasswordConfirmation(evt.target.value)}
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