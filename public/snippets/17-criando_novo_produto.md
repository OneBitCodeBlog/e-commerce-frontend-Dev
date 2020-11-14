# 1. Introdução

Nessa aula, vamos criar a página para criar um novo produto.

# 2. Conteúdo

1. Crie a pasta page/Admin/Products/New, e dentro crie o arquivo index.tsx.

2. Copie o conteúdo do page/Admin/Users/New para a página de listar produtos e modifique os seguintes pontos:

```jsx
import { Form, Col, Row } from 'react-bootstrap';
import { faTimes, faArrowUp, faTrash, faGamepad } from '@fortawesome/free-solid-svg-icons';
...
<TitleAdminPanel title="Adicionar Produto" path="Dashboard > Produtos > Adicionar produtos" />
...
<StyledButton icon={faGamepad} action={"Adicionar"} type_button="blue" />
<StyledButton icon={faTimes} action={"Cancelar"} type_button="red" />
...
```

3. Agora vamos personalizar nossa página, usando bootstrap, da seguinte forma:

```jsx
...
<div className={styles.admin_panel}>
    <Row style={{'textAlign': 'left'}}>
        <Col lg={4}>
        </Col>

        <Col lg={8}>
        </Col>
    </Row>
    ...
```

4. Vamos começar a colocar nossa imagem. Na primeira separação do <Col lg={4}>, adicione o seguinte:

```jsx
import Image from 'next/image';
...
<Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />

<div className={styles.details_button}>
    <StyledButton icon={faArrowUp} action={"Atualizar"} type_button="blue" />
    <StyledButton icon={faTrash} action={"Excluir"} type_button="red" />
</div>
...
```

5. Agora vamos construir nosso formulário. No <Col lg={8}>, adicione o seguinte código:

```jsx
...
<Form className={styles.new_form}>
    <Form.Row>
    </Form.Row>

    <Form.Row>
    </Form.Row>
</Form>
...
```

6. No primeiro <Form.Row>, vamos adicionar os nossos primeiros inputs:

```jsx
...
<Form.Group as={Col} className="p-4">
    <Form.Label>Nome</Form.Label>
    <Form.Control type="text" placeholder="Digite o Nome" className={styles.secundary_input} />
</Form.Group>

<Form.Group as={Col} className="p-4">
    <Form.Label>Código</Form.Label>
    <Form.Control type="text" placeholder="Digite o ID" className={styles.secundary_input} />
</Form.Group>
...
```

7. Agora no segundo <Form.Row>, vamos colocar os nossos selects options:

```jsx
<Form.Group as={Col} className="p-4">
    <Form.Label>Categorias</Form.Label>
    <Form.Control as="select" className={styles.secundary_input}>
        <option>Selecionar</option>
        <option>História</option>
        <option>Aventura</option>
        <option>Mundo aberto</option>
    </Form.Control>
</Form.Group>

<Form.Group as={Col} className="p-4">
    <Form.Label>Status</Form.Label>
    <Form.Control as="select" className={styles.secundary_input}>
        <option>Disponível</option>
        <option>Indisponível</option>
    </Form.Control>
</Form.Group>
```