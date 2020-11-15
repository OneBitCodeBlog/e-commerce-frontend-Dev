# 1. Introdução

Nessa aula, vamos criar a página para detalhar uma categoria.

# 2. Conteúdo

1. Crie a pasta page/Admin/Category/Details, e dentro crie o arquivo index.tsx.

2. Copie o conteúdo do page/Admin/Products/Details para a página de listar categorias e apague as seguintes importações:

```jsx
...
import { Col, Row } from 'react-bootstrap';
...
import Image from 'next/image';
...
```

3. Modifique o TitleAdminPanel para a seguinte forma:

```jsx
<TitleAdminPanel title="Detalhes da categoria" path="Dashboard > Categorias > Detalhes da categoria" />
```

4. Apague todo o código abaixo do TitleAdminPanel, dentro do return, e substitua-o pelo seguinte:

```jsx
...
<div className={styles.admin_panel}>
    <h6 className="m-4">Nome: Mundo Aberto</h6>

    <div className={styles.details_button}>
        <StyledButton icon={faEdit} action={"Editar"} type_button="blue" />
        <StyledButton icon={faTrash} action={"Excluir"} type_button="red" />
    </div>
</div>
...
```