# 1. Introdução

Nessa aula, vamos criar nosso footer deslogado. Aqui vamos fazer o footer que o usuário terá acesso caso não tenha realizado o login.

# 2. Conteúdo

1. Crie o componente components/shared/Footer/StorefrontFooter.

2. Dentro dele crie o index.tsx:

```jsx
import React from 'react';

const StorefrontFooter: React.FC = () => {
    return (
        <footer>
            Footer
        </footer>
    )
}

export default StorefrontFooter;
```

3. Crie o css style/Footer.module.css com o seguinte conteúdo:

```css
.background {
    background-color: var(--color-primary);
    width: 100%;
    padding: 20px;
    text-align: center;
}
```

4. No componente StorefrontFooter adicione o seguinte:

```jsx
import styles from '../../../../styles/Footer.module.css';
...

const StorefrontFooter: React.FC = () => {
    return (
        <footer className={styles.background}>
        ...
        </footer>
...
```

5. Agora adicione o seguinte código no componente StorefrontFooter para adicionar a parte superior do footer:
```jsx
import { Col, Row } from 'react-bootstrap';
...
<footer>
    <Col md={{ span: 8, offset: 2 }}>
        <Row>
            <Col lg={7} md={12}>
                <Row>
                    <Col lg={3} md={12} className="mb-4 mb-lg-0">
                        Acompanhe-nos
                    </Col>
                </Row>
            </Col>

            <Col lg={{span: 4, offset: 0}} xs={{span: 8, offset: 2}}>
            </Col>
        </Row>

        <hr />
    </Col>
</footer>
...
```

6. Dentro da coluna vazia de span: 4, vamos colocar o seguinte código:

```jsx
...
<Row>
    <Col>
        Contato
    </Col>

    <Col>
        Sobre
    </Col>

    <Col>
        Blog
    </Col>

    <Col>
        FAQ
    </Col>
</Row>
...
```

7. Vamos adicionar nossos ícones ao lado da frase 'Acompanhe-nos':

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

...

<Col lg={5} md={12} className="mb-4 mb-lg-0">
    Acompanhe-nos
</Col>

<Col lg={7} md={12} className="mb-4 mb-lg-0">
    <Row>
        <Col lg={1} xs={2}>
            <FontAwesomeIcon icon={faFacebookF}  />
        </Col>

        <Col lg={1} xs={2}>
            <FontAwesomeIcon icon={faInstagram} />
        </Col>

        <Col lg={1} xs={2}>
            <FontAwesomeIcon icon={faYoutube}  />
        </Col>

        <Col lg={1} xs={2}>
            <FontAwesomeIcon icon={faTwitter}  />
        </Col>

        <Col lg={1} xs={2}>
            <FontAwesomeIcon icon={faLinkedin}  />
        </Col>
    </Row>
</Col>
...
```

10. Agora, vamos otimizar a renderização do nosso logo, para começar a construção da parte inferior do nosso footer.

11. No arquivo styles/Footer.module.css, cole o seguinte css:

```css
.line {
    background-color: rgba(245,245,245,0.3);
}
```

12. No nosso Footer, vamos adicionar nossa imagem à parte inferior.

```jsx
import Logo from '../../Logo';
...
<hr className={styles.line} />
...
        <Row>
            <Col lg={{span: 2, offset: 0}} xs={{span: 8, offset: 2}}>
              <Logo />
            </Col>

            <Col lg={{span: 6, offset: 1}} xs={12}>
              <p style={{'color': 'var(--color-gray-light)'}}>onebitcode.com • contato@onebitcode.com</p>
            </Col>

            <Col lg={{span: 2, offset: 1}} xs={{span: 6, offset: 3}}>
            </Col>
        </Row>

    </Col>
</footer>
...
```

13. Agora vamos adicionar nossa imagem da Logo do Bootcamp, no componente Footer:

```jsx
import Image from 'next/image';
...
            <Col lg={{span: 2, offset: 1}} xs={{span: 6, offset: 3}}>
              <Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />
            </Col>
        </Row>
    </Col>
</footer>
...
```

14. No components/shared/MainComponent, adicione o seguinte código:

```jsx
...
import Footer from '../shared/Footer/StorefrontFooter';

...
<Footer />
```