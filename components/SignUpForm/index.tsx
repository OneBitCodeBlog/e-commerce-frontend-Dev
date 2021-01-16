import { useState } from 'react';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../shared/BlueBackground';

import UsersService from '../../services/users';

import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { setLoggedUser } from '../../store/modules/auth/reducer';

interface SignUpProps {
  titlePhrase: string;
  buttonPhrase: string;
}

const SignUpForm: React.FC<SignUpProps> = ({ titlePhrase, buttonPhrase }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const dispatch = useDispatch();


  const handleSubmit = async(evt: React.FormEvent):Promise<void> => {
    evt.preventDefault();

    if(password !== passwordConfirmation) {
      toast.error('A senha e a confirmação de senha devem ser iguais!')
      return;
    }
    try {
      await UsersService.signUp({ 
        name, 
        email, 
        password, 
        password_confirmation: passwordConfirmation 
      });

      toast.info('Registro realizado com sucesso! Para continuar faça seu login.');

      dispatch(setLoggedUser({ 
        id: 0,
        name,
        email,
        profile: 'client'
      }))

      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    } catch(err) {
      if(err.response.data.errors) {
        toast.warning(err.response.data.errors.full_messages[0]);
      }
      console.log(err.response);
    }
  }

  return (
    <div>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
          <BlueBackground>
            <h4>{titlePhrase}</h4>

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

                <Button type="submit" className="btn btn-info mt-3 w-100">{buttonPhrase}</Button>
              </form>
          </BlueBackground>
        </Col>
      </Row>
    </div>
  )
}

export default SignUpForm;