# 1. Introdução

Nessa aula, vamos criar a página para editar um produto.

# 2. Conteúdo

1. Crie a pasta page/Admin/Products/Edit, e dentro crie o arquivo index.tsx.

2. Copie o conteúdo do page/Admin/Products/New para a página de editar um produto e modifique os seguintes pontos:

```jsx
...
const Edit: React.FC = () => {
...
<TitleAdminPanel title="Editar Produto" path="Dashboard > Produtos > Detalhes do produto > Editar produto" />
...
<StyledButton icon={faGamepad} action={"Atualizar"} type_button="blue" />
...
export default Edit;
```