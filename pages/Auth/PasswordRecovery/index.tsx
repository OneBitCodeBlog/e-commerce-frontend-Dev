import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import MainComponent from '../../../components/shared/MainComponent';
import PasswordComponent from '../../../components/shared/PasswordComponent';

import api from '../../../services/api';

import { toast } from 'react-toastify';

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState('');

  const requestPasswordRecovery = async (email: string): Promise<void> => {
    try {
      const response = await api.post('/auth/v1/user/password', {
        email,
        redirect_url: 'http://localhost:3001/Auth/ChangePassword'
      });

      toast.success(response.data.message)
    } catch (err) {
      toast.error(err.response.data.errors[0])
      console.log(err.response);
    }
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();
    await requestPasswordRecovery(email);
  }

  return (
    <MainComponent>
      <PasswordComponent>
        <form onSubmit={handleSubmit}>
          <h5>Digite o Email Cadastrado</h5>

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

          <Button type="submit" className="btn btn-info mt-3 w-100">Enviar</Button>
        </form>
      </PasswordComponent>
    </MainComponent>
  )
}

export default PasswordRecovery;