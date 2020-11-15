# 1. Introdução

Nessa aula, vamos criar a página de listagem de usuários do painel administrativo.

# 2. Conteúdo

1. Vamos criar a página pages/Admin/Users/List e crie o arquivo index.tsx:

```jsx
import React, { useState } from 'react';

const List: React.FC = () => {
    return (
        <>

        </>
    )
}

export default List;
```

2. Agora vamos importar o nosso AdminComponent em volta da nossa página List:

```jsx
import AdminComponent from '../../../../components/shared/AdminComponent';

...
<AdminComponent>

</AdminComponent>
...
```

3. Primeiro, vamos iniciar a criação da primeira parte do painel, o cabeçalho da pesquisa de usuários. Crie o componente TitleAdminPanel, e dentro crie o index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const TitleAdminPanel: React.FC = () => {
    return (
        <>

        </>
    )
}

export default TitleAdminPanel;
```

4. Agora vamos separar nosso componente em duas partes, o nome da página junto com o caminho da mesma, e a segunda parte que é o campo de pesquisa e um botão.

5. Vamos começar a criar a primeira parte. Crie o componente components/TitleAdminPanel/TitleAndPath com o arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const TitleAndPath: React.FC = () => {
    return (
        <>

        </>
    )
}

export default TitleAndPath;
```

6. Crie o arquivo styles/AdminTitle.module.css, e adicione o seguinte código:

```css
.title_and_path {
    text-align: left;
}

.title_and_path h4, .title_and_path span {
    display: inline;
}

.styledPath {
    color: var(--color-gray-light);
    font-size: 11px;
    margin-left: 10px;
    margin-top: 10px;
}

.input {
    background-color: var(--color-secondary);
    border: none;
    height: 30px;
}

.input:focus {
    background-color: var(--color-secondary);
}

.titleButton {
    margin-top: -5px;
}

@media (max-width: 1200px) {
  .styledPath {
    display: none!important;
   }
}
```

6. Agora vamos adicionar a tipagem do nosso componente e o conteúdo que virá do componente pai:

>Nosso componente receberá o título da página e o caminho. Pra isso, vamos colocar o seguinte

```jsx
...
import styles from '../../../../styles/AdminTitle.module.css';

interface TitleAndPath {
    title: String,
    path: String
}

const TitleAndPath: React.FC<TitleAndPath> = ({title, path}) => {
    return (
        <>
            <h4>{ title }</h4>
            <span className={styles.styledPath}>{ path }</span>
        </>
    )
}
...
```

7. Crie também o componente /components/TitleAdminPanel/SearchAndIcon, e crie o arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const SearchAndIcon: React.FC = () => {
    return (
        <>
            
        </>
    )
}

export default SearchAndIcon;
```

8. Agora vamos separar nosso componente com o bootstrap:

```jsx
import React from 'react';
import { Row, Col } from 'react-bootstrap';

...
    return (
        <Row>
            <Col lg={9} xs>
            </Col>

            <Col lg={2} xs={{span: 3}}>
            </Col>
        </Row>
    )
...
```

9. Vamos adicionar nosso campo de pesquisa junto ao botão de pesquisa:

```jsx
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../../styles/AdminTitle.module.css';
...
<Col lg={9} xs>
    <Row>
        <Col lg={9} xs={10}>
            <InputGroup>
                <FormControl placeholder="Pesquisar usuário" className={styles.input} />
            </InputGroup>
        </Col>

        <Col lg={3} xs={2} className="mt-1">
            <FontAwesomeIcon icon={faSearch} size="lg" color="var(--color-gray-light)" className="float-left" />
        </Col>
    </Row>
</Col>
...
```

10. Agora vamos importar nosso botão para adicionar os usuários:

```jsx
...
import StyledButton from '../../StyledButton';
...
<Col lg={2} xs={{span: 3}} className={styles.titleButton}>
    <StyledButton icon={icon} type_button="blue" />
</Col>
```

11. Vamos adicionar tipagem ao nosso componente:

```jsx
import { IconProp } from '@fortawesome/fontawesome-svg-core';
...
interface SearchAndIcon {
    icon: IconProp
}

const SearchAndIcon: React.FC<SearchAndIcon> = ({icon}) => {
...
```

12. Agora vamos ao nosso componente components/TitleAdminPanel e crie o arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const TitleAdminPanel: React.FC = () => {
    return (
        <>

        </>
    )
}

export default TitleAdminPanel;
```

13. Vamos adicionar nossos componentes criados e o que precisaremos do bootstrap:

```jsx
...
import { Row, Col } from 'react-bootstrap';
import TitleAndPath from './TitleAndPath';
import SearchAndIcon from './SearchAndIcon';
import styles from '../../../styles/AdminTitle.module.css';
...
```

14. Agora vamos adicionar nossa estrutura.

>Caso seja enviado algum ícone, nosso componente renderizará a aba de pesquisa. Caso não, será renderizado somente o título da página com o caminho.

```jsx
...
<Row className="mt-4">
    {
        (icon) ?
            <>
                <Col lg={6} xs={4} className={styles.title_and_path}>
                    <TitleAndPath title={title} path={path} />
                </Col>

                <Col lg={{span: 4, offset: 2}} xs={8}>
                    <SearchAndIcon icon={icon} />
                </Col>
            </>
        :
            <TitleAndPath title={title} path={path} />
    }
</Row>
...
```

15. E vamos realizar a tipagem do nosso componente:

```jsx
...
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface TitleAdminPanelProps {
    title: String,
    path: String,
    icon?: IconProp
}

const TitleAdminPanel: React.FC<TitleAdminPanelProps> = ({ title, path, icon }) => {
...
```

16. Agora na página pages/Admin/Users/List e adicione o seguinte código:

```jsx
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
...
<TitleAdminPanel title="Usuários" path="Dashboard > Usuários" icon={faUserPlus} />
...
```

17. Agora crie o componente AdminListTable, com o arquivo index.tsx dentro, e coloque o seguinte código:

```jsx
import React from 'react';

const AdminListTable: React.FC = () => {
    return (
        <div>
            
        </div>
    )
}

export default AdminListTable;
```

18. Primeiro, vamos criar nosso css em styles/AdminPanel.module.css e coloque o seguinte conteúdo:

```css
.admin_panel {
    background-color: var(--color-secondary);
    padding: 30px;
    border-radius: 10px;
    margin-top: 20px;
}

.admin_panel table {
    color: white;
}
```

19. No componente AdminListTable adicione o seguinte conteúdo:

```jsx
...
import styles from '../../../styles/AdminPanel.module.css';
import { Table } from 'react-bootstrap';
...
    <div className={styles.admin_panel}>
        <Table borderless={true} hover={true} responsive={true}>
            
        </Table>
    </div>
...
```

120. Adicione o seguinte conteúdo, tipando as props do nosso componente para o reaproveitamento:

> A ideia é reaproveitar a maior parte da tabela em outros componentes de List.

```jsx
...
interface AdminListTableProps {
    first_title: String,
    second_title?: String,
    third_title?: String,
    fourth_title?: String,
    fifth_title?: String,
    sixth_title?: String
}
...
const AdminListTable: React.FC<AdminListTableProps> = ({children, first_title, second_title, third_title, fourth_title, fifth_title, sixth_title}) => {
...
<Table borderless={true} hover={true} responsive={true}>
    <thead>
        <tr>
            { first_title && <th>{first_title}</th>}
            { second_title && <th>{second_title}</th>}
            { third_title && <th>{third_title}</th>}
            { fourth_title && <th>{fourth_title}</th>}
            { fifth_title && <th>{fifth_title}</th>}
            { sixth_title && <th>{sixth_title}</th>}
            <th colSpan={2}>Ações</th>
        </tr>
    </thead>

    <tbody>
        { children }
    </tbody>
</Table>
...
```

21. Adicione também o seguinte código para realizar a paginação:

```jsx
...
</Table>

...
<div className="pagination justify-content-end">
    <div className="pagination">
        paginação
    </div>
</div>
...
```

22. Na página pages/Admin/Users/List, adicione o seguinte conteúdo:

```jsx
...
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

...
import AdminListTable from '../../../../components/shared/AdminListTable';
import styles from '../../../../styles/AdminPanel.module.css';
...
<AdminListTable first_title="Nome" second_title="Email" third_title="ID" fourth_title="Status">
    <tr className={styles.table_line}>
        <td>Leonardo Scorza</td>
        <td>contato@onebitcode.com</td>
        <td>#000001</td>
        <td>Administrador</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Leonardo Scorza</td>
        <td>contato@onebitcode.com</td>
        <td>#000001</td>
        <td>Administrador</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Leonardo Scorza</td>
        <td>contato@onebitcode.com</td>
        <td>#000001</td>
        <td>Administrador</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Leonardo Scorza</td>
        <td>contato@onebitcode.com</td>
        <td>#000001</td>
        <td>Administrador</td>
        <td><a href="#"><FontAwesomeIcon icon={faEdit} /></a></td>
        <td><a href="#"><FontAwesomeIcon icon={faTrash} onClick={handleShow} /></a></td>
    </tr>
</AdminListTable>
...
```

23. No css AdminPanel.module.css, adicione o seguinte código: 

```css
.table_line {
    background-color: var(--color-background);
    padding-right: 110px;
}

.table_line:hover {
    color: white!important;
}
```

24. Agora vamos criar nosso modal para o botão de delete. Crie o componente AdminDeleteModal, e crie o index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const AdminDeleteModal: React.FC = () => {
    return (
        <>
            
        </>
    )
}

export default AdminDeleteModal;
```

25. Vamos adicionar o conteúdo do nosso modal:

```jsx
import { Modal, Button } from 'react-bootstrap';
import styles from '../../../styles/AdminPanel.module.css';
...

<Modal show={show} onHide={handleClose} className={styles.modal} animation={true}>
    <Modal.Body className={styles.modal_body}>
        Tem certeza que deseja excluir este {target}?


    </Modal.Body>
</Modal>
...
```

26. Agora vamos criar nosso componente para renderizar nossos botões.

27. Crie o componente StyledButton, e crie o arquivo index.tsx dentro com o seguinte conteúdo:

```jsx
import React from 'react';

const StyledButton: React.FC = () => {
    return (
        <>

        </>
    )
}

export default StyledButton;
```

28. Crie o arquivo styles/StyledButton.module.css com o seguinte conteúdo:

```css
.red_button {
    background: none;
    border: 2px solid rgb(200,10,10);
}

.red_button:hover {
    background: none;
}

.blue_button {
    background: none;
    border: 2px solid rgb(10,10,200);
}

.blue_button:hover {
    background: none;
    border: 2px solid rgb(10,200,200);
}
```

29. Agora vamos importar nossa estrutura do botão:

```jsx
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from '../../../styles/StyledButton.module.css';

...
<Button className={(type_button == "red") ? styles.red_button : styles.blue_button}>
    { icon && <FontAwesomeIcon icon={icon} className={action && "mr-2"} /> } {action}
</Button>
```

30. Colocando nossa estrutura typescript:

```jsx
...
interface ButtonProps {
    icon: IconProp,
    action?: String,
    type_button: string
}

...
const StyledButton: React.FC<ButtonProps> = ({icon, action, type_button}) => {
```

31. Na página AdminDeleteModal, em baixo da frase e dentro do Modal.Body, vamos adicionar nossos botões. Adicione o seguinte conteúdo:

> As funções da handleClose vão ser renderizadas em nossa page. Por enquanto, a função não vai funcionar.

```jsx
...
import { Modal, Row, Col } from 'react-bootstrap';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import StyledButton from '../StyledButton';

...
<Row>
    <Col lg={6} xs>
        <div onClick={handleClose}>
            <StyledButton icon={faTrash} action={"Excluir"} type_button="red" />
        </div>
    </Col>

    <Col lg={6} xs>
        <div onClick={handleClose}>
            <StyledButton icon={faTimes} action={"Cancelar"} type_button="blue" />
        </div>
    </Col>
</Row>
...
```

32. Agora adicione a seguinte estrutura do typescript:

```jsx
...
interface AdminDeleteModalProps {
    show: boolean,
    handleClose: () => void,
    target: String
}
...
const AdminDeleteModal: React.FC<AdminDeleteModalProps> = ({show, handleClose}) => {
...
```

33. No AdminPanel.module.css adicione o seguinte código:

```css
.modal {
    top: 20%;
}

.modal_body {
    background-color: var(--color-primary);
    padding: 50px;
    text-align: center;
    font-size: 29px;
}
```

34. Na página pages/Admin/Users/List adicione o seguinte conteúdo:

```jsx
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';
...
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
```

35. Abaixo do TitleAdminPanel e acima do AdminListTable adicione o seguinte código:

```jsx
...
<AdminDeleteModal handleClose={handleClose} show={show} target="Usuário"  />
...
```

36. No componente TitleAdminPanel, substitua o "Botão ícone" pelo código:

```jsx
import StyledButton from '../StyledButton';
...

<StyledButton icon={faUserPlus} type_button="blue" />
...
```

37. Em nosso componente AdminListTable, modifique a palavra "Paginação", e adicione o seguinte código:

```jsx
import StyledButton from '../StyledButton';
...

<StyledButton action="<" type_button="blue" />
<StyledButton action="1" type_button="blue" />
<StyledButton action="2" type_button="blue" />
<StyledButton action="3" type_button="blue" />
...
<StyledButton action="31" type_button="blue" />
<StyledButton action=">" type_button="blue" />
```