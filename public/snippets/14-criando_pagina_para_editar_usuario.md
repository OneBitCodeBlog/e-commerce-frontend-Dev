# 1. Introdução

Nessa aula, vamos criar a página para editar usuários.

# 2. Conteúdo

1. Crie a pasta page/Admin/Users/Edit, e dentro crie o arquivo index.tsx.

2. Copie o conteúdo do page/Admin/Users/New para a página de Edit e modifique os seguintes pontos:

```jsx
...
import { faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
...
<TitleAdminPanel title="Editar Usuário" path="Dashboard > Usuários > Detalhes do usuário > Editar usuário" />
...
<StyledButton icon={faUser} action={"Atualizar"} type_button="blue" />
<StyledButton icon={faTimes} action={"Cancelar"} type_button="red" />
...
```