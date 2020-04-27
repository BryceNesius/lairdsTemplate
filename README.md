# nano-react-app-template

The template project for create-laird-app. [Based off of nano-react-app](https://github.com/lairdjl/create-laird-app).

- `yarn start` — This will spawn a development server with a default port of `777`.
- `yarn run build` — This will output a production build in the `dist` directory.
- `firebase init` - Run this to initialize a firebase hosting instance

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
yarn start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```

## Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/adrianmcli/babel-preset-nano-react-app) and a small amount of configuration is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.
