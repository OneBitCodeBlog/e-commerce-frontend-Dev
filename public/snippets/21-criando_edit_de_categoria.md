# 1. Introdução

Nessa aula, vamos criar a página para editar uma categoria.

# 2. Conteúdo

1. Crie a pasta page/Admin/Category/Edit, e dentro crie o arquivo index.tsx.

2. Copie o conteúdo do page/Admin/Users/Edit para a página de listar categorias e modifique os seguintes códigos:

```jsx
...
import { Form } from 'react-bootstrap';
...
<TitleAdminPanel title="Editar Categoria" path="Dashboard > Categorias > Detalhes da categoria > Editar categoria" />
...
```

3. E deixe a <div className={styles.admin_panel}> com a seguinte aparência:

```jsx
...
<div className={styles.admin_panel}>
    <Form className={styles.new_form}>
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Digite seu Nome" className={styles.secundary_input} />
    </Form>

    <div className={styles.details_button}>
        <StyledButton icon={faUser} action={"Atualizar"} type_button="blue" />
        <StyledButton icon={faTimes} action={"Cancelar"} type_button="red" />
    </div>
</div>
...
```