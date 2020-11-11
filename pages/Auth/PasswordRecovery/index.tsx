import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import MainComponent from '../../../components/shared/MainComponent';
import PasswordComponent from '../../../components/shared/PasswordComponent';

const PasswordRecovery: React.FC = () => {
    return (
        <MainComponent>
            <PasswordComponent>
                <form>
                    <h5>Digite o Email Cadastrado</h5>

                    <InputGroup className="mt-3">
                        <FormControl placeholder="Meu e-mail" required />
                    </InputGroup>

                    <Button type="submit" className="btn btn-info mt-3 w-100">Enviar</Button>
                </form>
            </PasswordComponent>
        </MainComponent>
    )
}

export default PasswordRecovery;