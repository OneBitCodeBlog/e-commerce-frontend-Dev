# 1. Introdução

Nessa aula, vamos criar a página para listar produtos.

# 2. Conteúdo

1. Crie a pasta page/Admin/Products/List, e dentro crie o arquivo index.tsx.

2. Copie o conteúdo do page/Admin/Users/List para a página de listar produtos e modifique os seguintes pontos:

```jsx
...
<TitleAdminPanel title="Produtos" path="Dashboard > Produtos" icon={faGamepad} />

<AdminDeleteModal handleClose={handleClose} show={show} target="produto" />
...
```

3. Agora modifique a listagem de produtos para:

```jsx
...
<AdminListTable first_title="Nome do produto" second_title="Categorias" third_title="Código" fourth_title="Status">
    <tr className={styles.table_line}>
        <td>Ri sem dente evil</td>
        <td>Terror, Suspense, História</td>
        <td>#000001</td>
        <td>Disponível</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Cuphead</td>
        <td>Ação, Desenho</td>
        <td>#000002</td>
        <td>Disponível</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Gran Turismo</td>
        <td>Corrida, Esportes</td>
        <td>#000003</td>
        <td>Indisponível</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Far Cry 4</td>
        <td>História, Aventura, Mundo Aberto</td>
        <td>#000003</td>
        <td>Disponível</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>
</AdminListTable>
...
```