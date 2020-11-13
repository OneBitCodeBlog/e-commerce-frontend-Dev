# 1. Introdução

Nessa aula vamos criar nosso Header do painel administrativo, após realizar o login com o usuário de role 'admin'.

# 2. Conteúdo

1. Primeiro, vamos criar nosso componente components/shared/AdminHeader, e dentro dele vamos criar nosso index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const AdminHeader: React.FC = () => {
    return(
        <div>
            
        </div>
    )
}

export default AdminHeader;
```

2. Crie o arquivo styles/AdminHeader.module.css e adicione o seguinte conteúdo nele:

```css
.background {
    background-color: var(--color-primary);
    padding: 10px;
    border-radius: 10px;
    margin-top: 100px;
}
```

3. Vamos separar o conteúdo do nosso Header do admin com o bootstrap e adicionar nosso css:

```jsx
import { Row, Col } from 'react-bootstrap';
import styles from '../../../styles/AdminHeader.module.css';
...
<Row className={styles.background}>
    <Col lg={6} xs>
    </Col>

    <Col lg={6} xs>
    </Col>
</Row>
```

4. Agora vamos adicionar nossos ícones na primeira metade do nosso AdminHeader:

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faUserCircle } from '@fortawesome/free-solid-svg-icons';
...

<Col lg={6} xs>
    <FontAwesomeIcon icon={faSignal} color="var(--color-gray-light)" className="ml-3" />
    <FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="ml-3" />
    <FontAwesomeIcon icon={faGamepad} color="var(--color-gray-light)" className="ml-3" />
    <FontAwesomeIcon icon={faCheckSquare} color="var(--color-gray-light)" className="ml-3" />
    <FontAwesomeIcon icon={faLaptop} color="var(--color-gray-light)" className="ml-3" />
    <FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="ml-3" />
    <FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="ml-3" />
</Col>

...
```

5. Agora precisaremos usar nossa props.name, então vamos preparar nosso componente pra recebê-la:

```jsx
...
interface AdminHeaderProps {
    name: string
}
...
const AdminHeader: React.FC<AdminHeaderProps> = ({name}) => {
```

6. Adicione o seguinte código no arquivo styles/AdminHeader.module.css:

```css
.name {
    color: var(--color-gray-light);
    font-size: 0.9rem;
    margin-right: 10px;
}
```

6. Já na segunda metade, vamos adicionar o nome do admin logado, junto a um ícone:

```jsx
...

<Col lg={6} xs>
    <div className="float-right">
        <span className="mr-3" className={styles.name}>{ name }</span>
        <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
    </div>
</Col>
```

7. Crie o componente components/shared/AdminComponent, e dentro crie o arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const AdminComponent: React.FC = ({children}) => {
    return(
        <>
            {children}
        </>
    )
}

export default AdminComponent;
```

8. Agora vamos personalizar a posição dos componentes no AdminComponent para prepará-lo para receber o Header, o Footer e o Menu Lateral. Deixe o AdminComponent da seguinte forma:

```jsx
import { Col, Row } from 'react-bootstrap';
...
<Row className="mr-lg-4">
    <Col lg={3}>
        Menu Lateral
    </Col>

    <Col lg={9}>
        <div className="d-flex flex-column sticky-footer-wrapper container">
            <div className="flex-fill text-center">
                { children }
            </div>
        </div>
    </Col>
</Row>
...
```

9. Vamos importar nosso AdminHeader no nosso AdminComponent. Acesse o AdminComponent e coloque o seguinte código:

```jsx
import AdminHeader from '../AdminHeader';

...
<AdminHeader name="Nome do User" />

<div className="flex-fill text-center">
    { children }
</div>
```

9. Agora vamos envolver nosso pages/index.tsx com nosso AdminComponent. Acesse o pages/index.tsx e coloque o seguinte código:

```jsx
...
import AdminComponent from '../components/shared/AdminComponent';

const Home: React.FC = () => {
    return (
        <AdminComponent>
            <h1>Painel Admin</h1>
        </AdminComponent>

    ...
```