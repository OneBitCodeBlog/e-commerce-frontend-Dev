# 1. Introdução

Nessa aula, vamos construir nosso Header deslogado. Faremos uma rota para o usuário deslogado, junto a seu Header.

# 2. Conteúdo
1. Crie a pasta /components/shared. 

>Nessa pasta shared, criaremos nossos componentes que serão reutilizados por outros componentes.

2. Vamos criar nosso componente components/shared/MainComponent, e dentro criar o index.tsx com o seguinte conteúdo:

>Aqui será renderizado nosso Footer e nosso Header, para criar nosso menu.

```jsx
import React from 'react';

const MainComponent: React.FC = () => {
    return (
        <div className="d-flex flex-column sticky-footer-wrapper">

        </div>
    )
}

export default MainComponent;
```

3. Agora vamos renderizar o conteúdo que será encapsulado dentro do nosso MainComponent:

```jsx
const MainComponent: React.FC = ({ children }) => {
...
{ children }
```

2. Agora vamos criar o nosso componente StorefrontHeader.

3. Dentro da pasta shared/Header, crie a pasta StorefrontHeader.

>No Header, vamos separar futuramente no Header deslogado, o header do cliente logado e o header do Admin, para futuramente reutilizar essas rotas.

4. Agora vamos criar, dentro da pasta StorefrontHeader, o arquivo index.tsx com o seguinte conteúdo:

```ruby
import React from 'react';

const StorefrontHeader: React.FC = () => {
    return (
        <div>
            Header
        </div>
    )
}

export default StorefrontHeader;
```

5. Crie o arquivo /styles/Header.module.css, com o seguinte conteúdo:

```css
.background {
    background-color: var(--color-primary);
    padding: 20px;
    font-size: 1.4rem;
    font-weight: 500;
}
```

6. Vamos começar a personalizar o nosso header. Para isso, adicione o seguinte código:

```jsx
...
import styles from '../../../../styles/Header.module.css';

...
    return (
        <header className={styles.background}>
            Header
        </header>
    )
...
```

> Aqui estilizamos ele como na organização de estilos do React Native. Usando nossas classes como atributos!! A diferença é que o css fica em um module separado.
>
> Assim conseguimos estilizar nosso componente, deixando-o bem didático e organizado!

7. Vamos preparar nosso componente! Agora vamos usar um pouco do bootstrap e separar o conteúdo do StorefrontHeader. Vamos colocar o seguinte código:

```jsx
import { Row, Col } from 'react-bootstrap';
...
<Row className={styles.background}>
    <Col md={8} className="mt-2">
        Logo
    </Col>

    <Col md={4} className="mt-2 text-center">
    </Col>
</Row>
```

8. Agora vamos começar a construir nosso StorefrontHeader colocando o input de pesquisa. Para isso, vamos colocar o seguinte código:

```ruby
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
...
    <Col md={4} className="mt-2 text-center">
        <Row>
            <Col md={6} className="mb-4 mb-md-0">
                <InputGroup>
                    <FormControl placeholder="Pesquisar usuário" />
                </InputGroup>
            </Col>

            <Col md={6}>
                Ícones
            </Col>
        </Row>
    </Col>
</Row>
```

9. Para os ícones, precisamos instalara o fontAwesome. Pare a aplicação e rode o seguinte comando:

> Para quem não sabe, o Font Awesome é uma biblioteca de ícones. Usaremos ela nos nossos ícones do painel admin e do footer, principalmente.

```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
npm install --save @fortawesome/free-brands-svg-icons
```

10. Agora vamos adicionar nossos ícones no nosso StorefrontHeader, aonde está a palavra "Ícones":

```ruby
...
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
...

<Row>
    <Col md={4} xs={4}>
        <FontAwesomeIcon icon={faSearch} color="var(--color-gray-light)" />
    </Col>

    <Col md={4} xs={4}>
        <FontAwesomeIcon icon={faShoppingCart} color="var(--color-gray-light)" />
    </Col>

    <Col md={4} xs={4}>
        <FontAwesomeIcon icon={faUserCircle} color="var(--color-gray-light)" />
    </Col>
</Row>
```

11. Agora vamos criar nosso componente /components/shared/Logo, e dentro dele vamos criar o arquivo index.tsx com o conteúdo básico:

```jsx
import React from 'react';

const Logo: React.FC = () => {
    return <h1>imagem Logo</h1>
}

export default Logo;
```

12. Crie a pasta /public/assets e coloque nossas logos nessa pasta assets.

13. Agora, no nosso componente /components/shared/Logo vamos importar a imagem e o componente Link, e a imagem, do nextjs:

```jsx
...
import Link from 'next/link';
import Image from 'next/image';

...
    return (
        <Link href="/">
            <a>
                <Image src="/assets/logo-games.png" alt="Logo OneBitGames" width={220} height={40} />
            </a>
        </Link>
    )
...
```

14. Agora no nosso componente StorefrontHeader, vamos importar nosso componente Logo, substituindo no lugar onde está escrito "Logo".

```jsx
import Logo from '../../Logo';
...
<Logo />
```

15. No componente MainComponent, coloque o seguinte código:

```jsx
import Header from '../shared/Header/StorefrontHeader';
...
<Header />

<div className="container flex-fill">
    {children}
</div>
...
```

16. Crie a pasta pages/Storefront, e dentro crie o arquivo index.tsx com a seguinte estrutura:

```jsx
import React from 'react';

const Storefront: React.FC = () => {
    return(
        <>

        </>
    )
}

export default Storefront;
```

17. Dentro desse arquivo, adicione o seguinte código:

```jsx
...
import MainComponent from '../../components/shared/MainComponent';

...
<MainComponent>
    <h1>StoreFront</h1>
</MainComponent>
```

18. Acesse o localhost:3001/Storefront

> Caso o background principal não consiga ser renderizado e esteja na cor branca, a causa é a ordem das importações no _app.tsx. Deixe-a com o css por último, como abaixo:

```css
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
```