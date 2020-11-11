# 1. Introdução

Nessa aula, vamos conectar nosso componente de modificação de senha, à nossa API, após ter requisitado a mudança de senha por email.

# 2. Conteúdo

1. Crie o componente pages/Auth/ChangePassword, e dentro crie o arquivo index.tsx com o seguinte formato:

```jsx
import React from 'react';

const ChangePassword: React.FC = () => {
    return (
        <div>
            Troca de senha
        </div>
    )
}

export default ChangePassword;
```

3. No nosso componente pages/Auth/ChangePassword, vamos começar a estilizá-lo. Insira o seguinte código:

```jsx
import { InputGroup, FormControl, Button } from 'react-bootstrap';

...
<div>
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
</div>
...
```

4. Agora, vamos envolver nosso componente com o outro componente PasswordComponent:

```jsx
import PasswordComponent from '../../../components/shared/PasswordComponent';
...
return (
    <PasswordComponent>

    ...

    </PasswordComponent>
)
...
```

5. Agora vamos importar nosso MainComponent por fora do conteúdo:

```jsx
import MainComponent from '../../../components/shared/MainComponent';
...
<MainComponent>
...
</MainComponent>

...
```