# web-client-react-redux
A starter kit to quickly start to develop a web app using react & redux.

## Commands
- Development: `npm start`
- Clean: `npm run clean`
- Build for production: `npm run build`
- Test: `npm test`
- Test with coverage: `npm run test:coverage`
- Test watch mode: `npm run test:watch`

## Stack
- build: [Webpack 3](https://webpack.js.org)
- styles: [Stylus](http://stylus-lang.com) with postcss ([autoprefixer](https://github.com/postcss/autoprefixer))
- View | Controller: [react](https://facebook.github.io/react/)
- Model | Controller: [redux](http://redux.js.org)

## Folder tree
    .
    `-- config/
    |   jest.config.json
    |   webpack.dev.config.js
    |   webpack.production.config.js
    |
    `-- coverage/
    `-- dist/
    |
    `-- src/
        `-- assets/
        |   `-- fonts/
        |   `-- images/
        |   index.html
        |
        `-- components/
        |   `-- containers/
        |   |   `-- containerA/
        |   |       ContainerA_actions.js
        |   |       ContainerA_constants.js
        |   |       ContainerA_reducer.js
        |   |       ContainerA.jsx
        |   |       ContainerA.spec.js
        |   |
        |   `-- presentational/
        |   |   `-- componentA/
        |   |       ComponentA.jsx
        |   |       ComponentA.styl
        |   |       ComponentA.spec.js
        |   |   
        |   `-- views/
        |
        `-- core/
        |     reducer.js
        |     store.js
        |
        `-- style/
        |   main.styl
        |   reset.styl
        | 
        app.jsx

## To do
- [x] Add loaders for files (fonts, images) & styles
- [x] Set up test (jest, expect, enzyme?)
- [ ] Does use [react-immutable-proptypes](https://www.npmjs.com/package/react-immutable-proptypes)?
- [ ] Is [nib](https://github.com/tj/nib) effective ? ([More...](https://github.com/shama/stylus-loader))
- [x] Specify configuration
    - [Eslint](http://eslint.org/docs/user-guide/configuring)
