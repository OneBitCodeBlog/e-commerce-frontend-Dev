# 1. Introdução

Nessa aula, vamos criar a página de detalhes do usuário.

# 2. Conteúdo

1. Crie a pasta pages/Admin/Users/Details, e dentro crie o arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const Details: React.FC = () => {
    return (
        <>

        </>
    )
}

export default Details;
```

2. Agora vamos envolver com nosso AdminComponent:

```jsx
import AdminComponent from '../../../../components/shared/AdminComponent';
...
<AdminComponent>
...
</AdminComponent>

...
```

3. Coloque também nosso TitleAdminPanel:

```jsx
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
...
<TitleAdminPanel title="Detalhes do Usuário" path="Dashboard > Usuários > Detalhes do usuário" />
```

4. Agora vamos colocar nosso detalhe do usuário e nossos botões:

```jsx
import { Col, Row } from 'react-bootstrap';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import StyledButton from '../../../../components/shared/StyledButton';
import styles from '../../../../styles/AdminPanel.module.css';
...
<div className={styles.admin_panel}>
    <Row style={{'textAlign': 'left'}}>
        <Col lg={6}>
            <h6 className="m-4">Nome: Leonardo Scorza</h6>
            <h6 className="m-4">E-mail: contato@onebitcode.com</h6>
        </Col>

        <Col lg={6}>
            <h6 className="m-4">ID: #00001</h6>
            <h6 className="m-4">Status: Administrador</h6>
        </Col>
    </Row>

    <div className={styles.details_button}>
        <StyledButton icon={faEdit} action={"Editar"} type_button="blue" />
        <StyledButton icon={faTrash} action={"Excluir"} type_button="red" />
    </div>
</div>
...
```

5. No nosso style/AdminPanel.module.css adicione o seguinte conteúdo:

```css
...

.details_button {
    text-align: right;
}

.details_button > button {
    margin: 10px;
}
```