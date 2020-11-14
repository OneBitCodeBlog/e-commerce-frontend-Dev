# 1. Introdução

Nessa aula, vamos criar a página para exibir os detalhes de um produto.

# 2. Conteúdo

1. Crie a pasta page/Admin/Products/Details, e dentro crie o arquivo index.tsx.

2. Copie o conteúdo do page/Admin/Users/Details para a página de listar produtos e modifique os seguintes pontos:

```jsx
...
<TitleAdminPanel title="Detalhes do Produto" path="Dashboard > Produtos > Detalhes do produto" />
...
<Col lg={6}>
    <h6 className="m-4">Nome: Far Cry 4</h6>
    <h6 className="m-4">Categorias: História, Aventura, Mundo Aberto, Ação, Estratégia.</h6>
</Col>

<Col lg={6}>
    <h6 className="m-4">Código: #00001</h6>
    <h6 className="m-4">Status: Disponível</h6>
</Col>
...
```

3. Agora vamos personalizar nossa página, usando bootstrap, da seguinte forma:

```jsx
...
<div className={styles.admin_panel}>
    <Row style={{'textAlign': 'left'}}>
        <Col lg={4}>
            ...
        </Col>

        <Col lg={8}>
            <Row>
                <Col lg={6}>
                    <h6 className="m-4">Nome: Far Cry 4</h6>
                    <h6 className="m-4">Categorias: História, Aventura, Mundo Aberto, Ação, Estratégia.</h6>
                </Col>

                <Col lg={6}>
                    <h6 className="m-4">Código: #00001</h6>
                    <h6 className="m-4">Status: Disponível</h6>
                </Col>
            </Row>
        </Col>
    </Row>
    ...
```

5. Agora vamos adicionar nossa imagem no <Col lg={4}> da seguinte forma:

```jsx
import Image from 'next/image';
...
<Image src="/assets/logo-bootcamp.png" alt="Logo Bootcamp" width={240} height={70} />
...
```