import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PasswordComponent from '../../../components/shared/PasswordComponent';
import MainComponent from '../../../components/shared/MainComponent';
import { useRouter } from 'next/router';

import api from '../../../services/api';

import{ toast } from 'react-toastify';

interface ChangePasswordData {
  password: string;
  password_confirmation: string;
}

const ChangePassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const router = useRouter();

  const requestChangePassword = 
    async ({ 
      password, 
      password_confirmation 
    }: ChangePasswordData ): Promise<void> => {

    try {
      const reset_password_token = router.query.reset_password_token;
      const response = await api.patch('/auth/v1/user/password', {
        password,
        password_confirmation,
        reset_password_token
      });

      toast.success(response.data.message);
      router.push('/Auth/Login')
    } catch (err) {
      toast.error(err.response.data.errors[0])
      console.log(err.response);
    }
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault();
    await requestChangePassword({
      password, 
      password_confirmation: passwordConfirmation
    });
  }

  return (
    <MainComponent>
      <PasswordComponent>
        <h5>Criar nova senha</h5>

        <form onSubmit={handleSubmit}>
          <InputGroup className="mt-3">
            <FormControl 
              placeholder="Nova Senha"
              type="password"
              value={password}
              onChange={
                (evt: React.ChangeEvent<HTMLInputElement>) => 
                  setPassword(evt.target.value)
              }
              required />
          </InputGroup>

          <InputGroup className="mt-3">
            <FormControl 
              placeholder="Repetir nova senha"
              type="password"
              value={passwordConfirmation}
              onChange={
                (evt: React.ChangeEvent<HTMLInputElement>) => 
                  setPasswordConfirmation(evt.target.value)
              }
              required />
          </InputGroup>

          <Button type="submit" className="btn btn-info mt-3 w-100">Acessar</Button>
        </form>
      </PasswordComponent>
    </MainComponent>
  )
}

export default ChangePassword;