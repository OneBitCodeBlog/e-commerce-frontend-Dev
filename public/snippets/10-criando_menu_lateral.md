# 1. Introdução

Nessa aula, vamos criar o menu lateral do nosso painel do admin.

# 2. Conteúdo

1. Crie a pasta components/shared/LateralMenu, e crie o arquivo index.tsx com o seguinte conteúdo:

```jsx
import React from 'react';

const LateralMenu: React.FC = () => {
    return(
        <div>
            Menu Lateral
        </div>
    )
}

export default LateralMenu;
```

2. Crie o arquivo styles/MenuLateral.module.css e adicione o seguinte conteúdo:

```css
.background {
    background-color: var(--color-primary);
    padding: 40px;
    height: 100%;
}

.list {
    margin-top: 50px;
}
```

3. Agora vamos colocar nossa logo no menu lateral:

```jsx
import Logo from '../Logo';
...
<div className={styles.background}>
    <Logo />

    <div className={styles.list}>
        Lista do menu
    </div>
</div>
```

4. Agora vamos colocar nossos ícones no menu lateral:

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

...
<div className={styles.list}>
    <FontAwesomeIcon icon={faSignal} color="var(--color-gray-light)" className="mr-3" />
    Painel Inicial
    <hr />

    <FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="mr-3" />
    Usuários
    <hr />

    <FontAwesomeIcon icon={faGamepad} color="var(--color-gray-light)" className="mr-3" />
    Produtos
    <hr />

    <FontAwesomeIcon icon={faCheckSquare} color="var(--color-gray-light)" className="mr-3" />
    Categorias
    <hr />

    <FontAwesomeIcon icon={faLaptop} color="var(--color-gray-light)" className="mr-3" />
    Requisitos do sistema
    <hr />

    <FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="mr-3" />
    Cupons
    <hr />

    <FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="mr-3" />
    Financeiro
    <hr />

    <FontAwesomeIcon icon={faSignOutAlt} color="var(--color-gray-light)" className="mr-3" />
    Sair
    <hr />
</div>
...
```

5. Agora vamos colocar nosso menu lateral no nosso AdminComponent. Acesse o components/shared/AdminComponent e insira o seguinte código:

```jsx
import LateralMenu from '../LateralMenu';
...
<Col lg={3}>
    <LateralMenu />
</Col>
```