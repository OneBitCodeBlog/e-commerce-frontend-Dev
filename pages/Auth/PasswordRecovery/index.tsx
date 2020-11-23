import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import MainComponent from '../../../components/shared/MainComponent';
import PasswordComponent from '../../../components/shared/PasswordComponent';

import UsersService from '../../../services/users';

import { toast } from 'react-toastify';

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();
    try {
      const response = await UsersService.resetPassword(email);

      toast.success(response.data.message);
    } catch (err) {
      toast.error(err.response.data.errors[0]);
      console.log(err.response);
    }
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