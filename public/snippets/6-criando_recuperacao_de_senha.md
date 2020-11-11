# 1. Introdução

Nessa aula vamos construir nosso formulário de recuperação de senha e conectar com nossa API!

Antes de tudo, rode a nossa API com:

```
rails s -p 3000
```

# 2. Conteúdo

1. Agora, vamos criar nossa página de recuperação de senha.

2. Primeiro, vamos criar nosso componente components/shared/PasswordComponent, e dentro vamos criar o arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const PasswordComponent: React.FC = () => {
    return (
        <div>
            recover
        </div>
    )
}

export default PasswordComponent;
```

3. Agora vamos centralizar nosso conteúdo com o BlueBackground:

```jsx
import BlueBackground from '../shared/BlueBackground';

...
<BlueBackground>
...
</BlueBackground>
...
```

4. Vamos envolver o código tipando com o typescript:

```jsx
...
const PasswordComponent: React.FC = ({children}) => {
    return (
        <>
            <h3>Recuperar senha</h3>

            <BlueBackground>
                {children}
            </BlueBackground>
        </>
    )
}
```

5. Agora vamos centralizar nosso conteúdo:

```jsx
import { Row, Col } from 'react-bootstrap';
...
<Row>
    <Col lg={{span: 4, offset: 4}} md={{span: 8, offset: 2}} className="text-center">
        <BlueBackground>

        ...

        </BlueBackground>
    </Col>
</Row>
```


7. Agora vamos criar nossa page pages/Auth/PasswordRecovery, e dentro crie o index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const PasswordRecovery: React.FC = () => {
    return (
        <div>
            form
        </div>
    )
}

export default PasswordRecovery;
```

8. Vamos importar nosso componente PasswordComponent, envolvendo o conteúdo e adicionando o seguinte código:

```jsx
...
import PasswordComponent from '../../../components/shared/PasswordComponent';

...

return (
        <PasswordComponent>
            <h5>Digite o Email Cadastrado</h5>
        </PasswordComponent>
)
...
```


9. Agora vamos estilizar com o boostrap:

```jsx
...
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

...
const PasswordRecovery: React.FC = () => {
...
            <form>
            ...
                <InputGroup className="mt-3">
                    <FormControl placeholder="Meu e-mail" required />
                </InputGroup>

                <Button type="submit" className="btn btn-info mt-3 w-100">Enviar</Button>
            </form>
        </PasswordComponent>
    ...
```

10. Agora vamos importar nosso MainComponent na page PasswordRecovery:

```jsx
import MainComponent from '../../../components/shared/MainComponent';

...

<MainComponent>
...
</MainComponent>

...
```

13. No componente components/LoginForm/index.tsx, modifique e adicione os seguintes códigos:

```jsx
import Link from 'next/link';
...
<Link href="/Auth/PasswordRecovery">Esqueci minha senha</Link> <br />
...
```