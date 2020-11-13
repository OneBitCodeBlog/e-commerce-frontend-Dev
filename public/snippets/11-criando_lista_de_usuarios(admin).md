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

4. Agora vamos importar o bootstrap em nosso componente:

```jsx
import { Row, Col } from 'react-bootstrap';
...
<Row className="mt-4">
    <Col lg={6} xs={4}>
        título da página
    </Col>

    <Col lg={{span: 4, offset: 2}} xs={8}>
        Campo de pesquisa e ícones
    </Col>
</Row>

...
```

5. Crie o arquivo styles/AdminTitle.module.css e coloque o seguinte código:

```css
.styledPath {
    color: var(--color-gray-light);
    font-size: 13px;
    float: left;
}
```

5. Agora, na primeira parte do componente, adicione o seguinte:

```jsx
import styles from '../../../styles/AdminTitle.module.css';
...
<Col lg={6} xs={4}>
    ...
    <Row>
        <Col lg={3} xs={6}>
            <h3>Título</h3>
        </Col>

        <Col lg={9} xs={6} className="mt-2 d-none d-md-block">
            <span className={styles.styledPath}>Dashboard > Usuários</span>
        </Col>
    </Row>
    ...
</Col>
...
```

6. E na segunda parte do componente, adicione:

```jsx
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons';
...

<Col lg={{span: 4, offset: 2}} xs={8}>
    ...
    <Row>
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

        <Col lg={2} xs={{span: 2, offset: 1}} className={styles.titleButton}>
            <FontAwesomeIcon icon={faUserPlus} size="lg" />
        </Col>
    </Row>
    ...
</Col>
```

7. Agora vamos estilizar nosso Input e nosso Button. Vá no arquivo styles/AdminTitle.module.css e adicione:

```css
...
.input {
    background-color: var(--color-secondary);
    border: none;
    height: 30px;
}

.input:focus {
    background-color: var(--color-secondary);
}

.titleButton {
    border: 2px solid rgba(10,150,250,0.9);
    padding: 5px;
}
```

8. Agora adicione a estrutura em typescript, e vamos preparar esse componente para renderizar os parâmetros que mandarmos para ele:

> Esse componente será preparado para ser reutilizado. Sendo assim, o prepararemos para renderizar os parâmetros que desejarmos pra cada página.

```jsx
...
interface TitleAdminPanelProps {
    title: String,
    path: String
}
...
const TitleAdminPanel: React.FC<TitleAdminPanelProps> = ({ title, path }) => {
```

9. E substitua o seguinte conteúdo:

```jsx
...
<Col lg={3} xs={6}>
    <h3>{ title }</h3>
</Col>
...
<Col lg={9} xs={6} className="mt-2 d-none d-md-block">
    <span className={styles.styledPath}>{ path }</span>
</Col>
...
```

10. Agora na página pages/Admin/Users/List e adicione o seguinte código:

```jsx
...
    <TitleAdminPanel title="Usuários" path="Dashboard > Usuários" />
...
```

11. Agora crie o componente AdminListTable, com o arquivo index.tsx dentro, e coloque o seguinte código:

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

12. Primeiro, vamos criar nosso css em styles/AdminPanel.module.css e coloque o seguinte conteúdo:

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

13. No componente AdminListTable adicione o seguinte conteúdo:

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

14. Adicione o seguinte conteúdo, tipando as props do nosso componente para o reaproveitamento:

> A ideia é reaproveitar a maior parte da tabela em outros componentes de List.

```jsx
...
interface AdminListTableProps {
    first_title: String,
    second_title: String,
    third_title: String,
    fourth_title: String
}
...
const AdminListTable: React.FC<AdminListTableProps> = ({children, first_title, second_title, third_title, fourth_title}) => {
...
<Table borderless={true} hover={true} responsive={true}>
    <thead>
        <tr>
            <th>{ first_title }</th>
            <th>{ second_title }</th>
            <th>{ third_title }</th>
            <th>{ fourth_title }</th>
            <th colSpan={2}>Ações</th>
        </tr>
    </thead>

    <tbody>
        { children }
    </tbody>
</Table>
...
```

15. Adicione também o seguinte código para realizar a paginação:

```jsx
...
</Table>

...
<div className="float-right">
    <div className="pagination">
        Paginação
    </div>
</div>
...
```

16. Na página pages/Admin/Users/List, adicione o seguinte conteúdo:

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
        <td><FontAwesomeIcon icon={faEdit} /></td>
        <td><FontAwesomeIcon icon={faTrash} /></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Leonardo Scorza</td>
        <td>contato@onebitcode.com</td>
        <td>#000001</td>
        <td>Administrador</td>
        <td><FontAwesomeIcon icon={faEdit} /></td>
        <td><FontAwesomeIcon icon={faTrash} /></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Leonardo Scorza</td>
        <td>contato@onebitcode.com</td>
        <td>#000001</td>
        <td>Administrador</td>
        <td><FontAwesomeIcon icon={faEdit} /></td>
        <td><FontAwesomeIcon icon={faTrash} /></td>
    </tr>

    <br />

    <tr className={styles.table_line}>
        <td>Leonardo Scorza</td>
        <td>contato@onebitcode.com</td>
        <td>#000001</td>
        <td>Administrador</td>
        <td><FontAwesomeIcon icon={faEdit} /></td>
        <td><FontAwesomeIcon icon={faTrash} /></td>
    </tr>
</AdminListTable>
...
```

17. No css AdminPanel.module.css, adicione o seguinte código: 

```css
.table_line {
    background-color: var(--color-background);
    padding-right: 110px;
}

.table_line:hover {
    color: white!important;
}
```

18. Agora vamos criar nosso modal para o botão de delete. Crie o componente AdminDeleteModal, e crie o index.tsx com o seguinte conteúdo:

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

19. Vamos adicionar o conteúdo do nosso modal:

```jsx
import { Modal, Button } from 'react-bootstrap';
import styles from '../../../styles/AdminPanel.module.css';
...

<Modal show={show} onHide={handleClose} className={styles.modal} animation={true}>
    <Modal.Body className={styles.modal_body}>
        Tem certeza que deseja excluir este usuário?


    </Modal.Body>
</Modal>
...
```

20. Em baixo da frase, dentro do Modal.Body, vamos adicionar nossos botões. Adicione o seguinte conteúdo:

> As funções da handleClose vão ser renderizadas em nossa page. Por enquanto, a função não vai funcionar.

```jsx
...
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

...
<Row>
    <Col lg={6} xs>
        <Button className={styles.red_button} onClick={handleClose}>
            <FontAwesomeIcon icon={faTrash} className="mr-2" /> Excluir
        </Button>
    </Col>

    <Col lg={6} xs>
        <Button className={styles.blue_button} onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} className="mr-2" /> Cancelar
        </Button>
    </Col>
</Row>
...
```

21. Agora adicione a seguinte estrutura do typescript:

```jsx
...
const AdminDeleteModal: React.FC<AdminDeleteModalProps> = ({show, handleClose}) => {

...
interface AdminDeleteModalProps {
    show: boolean,
    handleClose: () => void
}
...
```

22. No AdminPanel.module.css adicione o seguinte código:

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

23. Na página pages/Admin/Users/List adicione o seguinte conteúdo:

```jsx
import AdminDeleteModal from '../../../../components/shared/AdminDeleteModal';
...
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
```

24. Abaixo do TitleAdminPanel e acima do AdminListTable adicione o seguinte código:

```jsx
...
<AdminDeleteModal handleClose={handleClose} show={show}  />
...
```