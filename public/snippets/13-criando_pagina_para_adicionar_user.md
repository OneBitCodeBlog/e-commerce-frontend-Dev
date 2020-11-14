# 1. Introdução

Nessa aula, vamos criar a página para adicionar novos usuários.

# 2. Conteúdo

1. Crie a pasta page/Admin/Users/New, e dentro crie o arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const New: React.FC = () => {
    return (
        <>
            
        </>
    )
}

export default New;
```

2. Vamos envolver nosso conteúdo com o AdminComponent, e coloque o componente TitleAdminPage:

```jsx
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';
...
<AdminComponent>
    <TitleAdminPanel title="Adicionar Usuário" path="Dashboard > Usuários > Adicionar usuário" />

</AdminComponent>
...
```

3. No arquivo styles/AdminPanel.module.css, adicione o seguinte código:

```css
.new_form {
    text-align: left;
    padding: 20px;
}

.secundary_input, .secundary_input:focus {
    background-color: var(--color-background);
    color: white;
    border: none;
}
```

4. Volte na page Users/New, e coloque o seguinte conteúdo:

>Vamos adicionar o nosso formulário na página

```jsx
import { Form, Col } from 'react-bootstrap';
import { faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminPanel.module.css';
...
<div className={styles.admin_panel}>
    <Form className={styles.new_form}>
        <Form.Row>
            <Form.Group as={Col} className="p-4">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite seu Nome" className={styles.secundary_input} />
            </Form.Group>

            <Form.Group as={Col} className="p-4">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" placeholder="Digite seu ID" className={styles.secundary_input} />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} className="p-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" className={styles.secundary_input} />
            </Form.Group>

            <Form.Group as={Col} className="p-4">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" className={styles.secundary_input}>
                    <option>Administrador</option>
                    <option>Cliente</option>
                </Form.Control>
            </Form.Group>
        </Form.Row>
    </Form>

    Botões
</div>
...
```

5. Agora, substitua o nome "botões" e adicione o seguinte conteúdo:

```jsx
import StyledButton from '../../../../components/shared/StyledButton';
...
</Form>

<div className={styles.details_button}>
    <StyledButton icon={faUserPlus} action={"Adicionar"} type_button="blue" />
    <StyledButton icon={faTimes} action={"Cancelar"} type_button="red" />
</div>
...
```