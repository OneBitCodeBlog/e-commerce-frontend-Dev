import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PasswordComponent from '../../../components/shared/PasswordComponent';
import MainComponent from '../../../components/shared/MainComponent';

const ChangePassword: React.FC = () => {
    return (
        <MainComponent>
            <PasswordComponent>
                <h5>Criar nova senha</h5>

                <form>
                    <InputGroup className="mt-3">
                        <FormControl placeholder="Nova Senha"
                                        type="password"
                                        required />
                    </InputGroup>

                    <InputGroup className="mt-3">
                        <FormControl placeholder="Repetir nova senha"
                                        type="password"
                                        required />
                    </InputGroup>

                    <Button type="submit" className="btn btn-info mt-3 w-100">Acessar</Button>
                </form>
            </PasswordComponent>
        </MainComponent>
    )
}

export default ChangePassword;