För att kunna använda knappen som hämtar Chuck Norris-skämt, behöver du en API-nyckel från API Ninjas Chuck Norris API. Följ dessa steg för att få tag på en API-nyckel:

Registrera dig på API Ninjas

Gå till API Ninjas hemsida.
Klicka på "Sign Up" eller "Get Started" och skapa ett konto.
Hämta din API-nyckel

När du har loggat in på ditt konto, gå till din API-nyckel-sektion.
Kopiera API-nyckeln som tillhandahålls där.
Skapa en .env-fil i projektets rotmapp

Skapa en ny fil i projektets rotmapp och döp den till .env.
Lägg till din API-nyckel i filen på följande sätt:
env
Kopiera kod
VITE_API_KEY=din-api-nyckel-här
Kör applikationen

När .env-filen är på plats, kan du köra applikationen genom att följa instruktionerna i projektets README för att starta den lokalt.
Notis: För att skydda din API-nyckel och inte lägga upp den på GitHub, är .env-filen redan inkluderad i .gitignore-filen. Det innebär att den inte kommer att pushas till GitHub.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
