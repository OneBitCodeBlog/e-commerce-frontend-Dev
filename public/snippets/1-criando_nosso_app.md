# Criando e organizando nosso projeto

# 1. Introdução

Nessa aula, vamos criar e configurar o básico do nosso app! Aqui vamos deixar o app bem preparado para receber nosso conteúdo.

## Dependências:

1 - Instale o node + npm via asdf:

```shell
asdf plugin-add nodejs
brew install gpg
bash ~/.asdf/plugins/nodejs/bin/import-release-team-keyring
asdf install nodejs 15.0.1
asdf global nodejs 15.0.1
node -v
```

2 - Instale o Yarn rodando:

```
npm install --global yarn
```

### Create-next-app

Para instalar o comando "create-next-app" rode o seguinte comando:

```
npm i create-next-app
```

# 2. Conteúdo

1. Crie o app com o seguinte comando:

```
npx create-next-app web
```

2. E exclua a pasta "api" dentro da pasta "pages", pois não usaremos ela em nosso app, sendo um web application.

3. Instale o typescript no seu projeto com o seguinte comando:
```
npm install typescript @types/react -D
```

4. Troque as extensões dos arquivos .js para .tsx, pois agora vamos começarmos a utilizar o typescript.

6. No arquivo o arquivo pages/_app, adicione a estrutura do typescript:

> Utilizamos o <Head> aqui para setar os atributos do cabeçalho da nossa página em todas as páginas.

```jsx
...
import React from 'react';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
...
```

7. Agora vamos adicionar nosso Head, à nossa page_app.tsx:

>Ele será responsável pelo Head da nossa página. Aqui colocaremos futuramente toda a parte de CEO dele, meta tags, etc.

```jsx
...
import Head from 'next/head';

...
return (
  <>
    <Head>
      <title>OneBitGames</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Component {...pageProps} />
  </>
)
...
```

8. Agora deixe a aparência do arquivo pages/index.tsx do seguinte modo:
```jsx
export default function Home() {
  return <h1>Hello World</h1>
}
```

9. E vamos adicionar a estrutura do typescript nele:

```jsx
import React from 'react';

...
const Home: React.FC = () => {
...

export default Home;
```

10. No arquivo package.json na raiz do projeto, modifique o script "dev" por:

```jsx
"dev": "next dev -p 3001",
```

11. Rode o projeto com o seguinte comando:
```
npm run dev
```