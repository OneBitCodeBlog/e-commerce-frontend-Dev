# 1. Introdução

Nessa aula vamos construir nosso formulário de autenticação e conectar com nossa API!

Antes de tudo, rode a nossa API com:

```
rails s -p 3000
```

# 2. Conteúdo

1. Crie o componente /components/shared/BlueBackground e o arquivo index.tsx. Coloque o seguinte conteúdo:

```jsx
import React from 'react';

const BlueBackground: React.FC = () => {
    return (
        <div>

        </div>
    )
}

export default BlueBackground;
```

2. Crie o arquivo styles/Background.module.css, com o seguinte conteúdo dentro:

```
.main {
    background-color: var(--color-primary);
    padding: 30px;
    border-radius: 10px;
}
```

3. Agora vamos colocar o nosso css:

```jsx
...
const BlueBackground: React.FC = ({ children }) => {
    return (
        <div className={styles.main}>
            { children }
        </div>
    )
}
...
```

### Criando o formulário da página inicial

1. Crie o seguinte componente components/LoginForm, e dentro crie um arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const LoginForm: React.FC = () => {
    return (
        <div>
            Login Form
        </div>
    )
}

export default LoginForm;
```

2. Agora vamos criar a page pages/Auth/Login/index.tsx com o seguinte código:
```jsx
import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      
    </div>
  )
}

export default Login;
```

3. Agora vamos envolver ele com nosso MainComponent:

```jsx
...
import MainComponent from '../../../components/shared/MainComponent';

...

<MainComponent>
...
</MainComponent>

...
```

3. E vamos importar o nosso LoginForm:

```jsx
...
import LoginForm from '../../../components/auth/Login';

... 
    <LoginForm />
...
```

4. Aparecendo nosso componente Login na tela, vamos personalizá-lo.

5. Vamos começar personalizando nosso layout. Para isso, no componente LoginForm, vamos importar o bootstrap e deixá-lo com o seguinte layout:

```jsx
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
...

<div>
    <Row>
        <Col lg={{span: 6, offset: 3}} md={{span: 8, offset: 2}}>
            <h4>Título</h4>

            <InputGroup className="mt-3">
                <FormControl placeholder="Meu e-mail" />
            </InputGroup>

            <InputGroup className="mt-3">
                <FormControl placeholder="Senha" />
            </InputGroup>

            <Button className="btn btn-info mt-3 w-100">Clique em mim</Button>
        </Col>
    </Row>
</div>
...
```

6. Agora vamos importar o BlueBackground:
```jsx
import BlueBackground from '../shared/BlueBackground';
...

<BlueBackground>
    <h4>Título</h4>
    
    ...

    <Button className="btn btn-info mt-3 w-100">Clique em mim</Button>
</BlueBackground>
...
```

7. Agora vamos prepará-lo para receber nossas informações e ficar dinâmico com typescript. 

8. Modifique o código para a seguinte forma:

```tsx
...
interface LoginProps {
    titlePhrase: String,
    buttonPhrase: String
}

...

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
...

<BlueBackground>
    <h4>{ titlePhrase }</h4>

...

<Button className="btn btn-info mt-3 w-100">{ buttonPhrase }</Button>

<br />

Esqueci minha senha
...
```

9. E no nosso pages/Auth/Login/index.tsx, deixe-o da seguinte forma:
```tsx
import LoginForm from '../../components/auth/Login';
...
<div className="p-4 text-center">
    <h2>Entrar</h2>
    
    <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />
</div>
...
```

10. Agora vamos criar nosso componente de SignUpForm. Crie o componente components/SignUpForm, com o arquivo index.tsx dentro da pasta.

11. Copie o conteúdo do componente Login, e substitua os seguintes trechos:
```tsx
interface SignUpProps {
...
const SignUpForm: React.FC<SignUpProps> = ({ titlePhrase, buttonPhrase }) => {
...
export default SignUpForm;
```

12. E adicione o seguinte conteúdo acima do InputGroup do email:

```jsx
<InputGroup className="mt-3">
    <FormControl placeholder="Meu Nome" />
</InputGroup>
```

E apague o trecho:

```jsx
<br />

Esqueci minha senha
```

12. No arquivo /src/pages/Auth/Login/index.tsx, adicione o seguinte código:

```jsx
import SignUpForm from '../../components/auth/SignUp';

...
<br />

<SignUpForm titlePhrase="Criar nova conta" buttonPhrase="CRIAR" />
```