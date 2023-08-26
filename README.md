Siga os seguintes passos:

```bash
 git clone git@github.com:AronNascimento2/e-commerce.git
 npm install
 npm run dev (os scripts "dev:vite" e "dev:json-server" rodarão simultaneamente )
```

![](https://github.com/AronNascimento2/e-commerce/blob/master/public/ecommerce-mobile1.png)
![](https://github.com/AronNascimento2/e-commerce/blob/master/public/ecommerce-mobile2.png)
![](https://github.com/AronNascimento2/e-commerce/blob/master/public/ecommerce-web.png)
![](https://github.com/AronNascimento2/e-commerce/blob/master/public/ecommerce-web1.png)

🖥️ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev/)
- [Styled-Components](https://styled-components.com/)
- [json-server](https://www.fabricadecodigo.com/json-server/)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
