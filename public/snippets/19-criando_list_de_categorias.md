# 1. Introdução

Nessa aula, vamos criar a página para listar nossas categorias.

# 2. Conteúdo

1. Crie a pasta page/Admin/Category/List, e dentro crie o arquivo index.tsx.

2. Copie o conteúdo do page/Admin/Products/List para a página de listar categorias e modifique os seguintes pontos:

```jsx
...
import { faEdit, faTrash, faGhost } from '@fortawesome/free-solid-svg-icons';
...
<TitleAdminPanel title="Categorias" path="Dashboard > Categorias" icon={faGhost} />

<AdminDeleteModal handleClose={handleClose} show={show} target="categoria" />
...
```

3. Agora vamos alterar nossa tabela.

4. Como as categorias só terão o atributo "nome", deixe-a da seguinte forma:

```jsx
...
<AdminListTable first_title="Nome da categoria">
    <tr className={styles.table_line}>
        <td>Terror</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Suspense</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Mundo Aberto</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Ação</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>
</AdminListTable>
...
```