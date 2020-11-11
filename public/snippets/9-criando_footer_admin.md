# 1. Introdução

Nessa aula, vamos criar o footer do nosso painel do admin.

# 2. Conteúdo

1. Crie o componente components/shared/AdminFooter e crie o arquivo index.tsx.

```jsx
import React from 'react';

const AdminFooter: React.FC = () => {
    return (
        <div>
            footer
        </div>
    )
}

export default AdminFooter;
```

2. Agora vamos colocar um pouco do bootstrap em nosso footer:

```jsx
...
import { Col, Row, Container } from 'react-bootstrap';
        ...

        <Container className="p-4">
            <Row>
                <Col>
                    Logo
                </Col>

                <Col>
                    <span className="float-right">onebitcode.com • contato@onebitcode.com</span>
                </Col>
            </Row>
        </Container>
        ...
```

3. Agora vamos importar nosso componente Logo, no Footer:

```jsx
...
import Logo from '../../Logo';
...
<Col>
    <Logo />
</Col>
...
```

4. Vamos no components/shared/AdminComponent vamos importar nosso Footer no AdminRoute:

```jsx
import AdminFooter from '../../Footer/AdminFooter';
...
<div className="flex-fill text-center">
    { children }
</div>

<AdminFooter />
```