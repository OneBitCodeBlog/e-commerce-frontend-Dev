# 1. Introdução

Nessa aula, vamos instalar o bootstrap ao nosso app.

# 2. Conteúdo

### Instalando o Bootstrap

1. Rode na linha de comando:
```
npm install react-bootstrap bootstrap
```

2. No arquivo pages/_app.tsx adicione as seguintes importações:

```
import 'bootstrap/dist/css/bootstrap.min.css';
```
### Setando o CSS global

1. Crie o style /styles/globals.css, coloque o seguinte código setando as variáveis globais, a fonte padrão e a cor de texto padrão para white.

```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap');

:root {
    --color-primary: #10163A;
    --color-secondary: #212744;
    --color-background: #262C49;
    --color-gray-light: #7DA1BC;
    --color-blue-light: #00CFFF;
    --color-white: #FFFFFF;
}

html,
body {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    background: var(--color-background);
    color: white;
    overflow-x: hidden;
}

body, .sticky-footer-wrapper {
    min-height:100vh;
}
...
```