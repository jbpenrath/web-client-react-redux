# web-client-react-redux
A starter kit to quickly start to develop a web app using react & redux.

## Commands
- Clean: `npm run clean`
- Development: `npm start`
- Test: `npm test`

## Stack
- build: [Webpack 2](https://webpack.js.org)
- styles: Stylus
- View | Controller: react
- Model | Controller: redux

## Folder tree
    .
    `-- config/
    |   webpack.config.js
    |   test.config.js 
    `-- dist/
    |
    `-- src/
        `-- assets/
        |       index.html
        `-- components/
        |   `-- containers/
        |   `-- presentational/
        |   |   `-- componentA/
        |   |   |       ComponentA.jsx
        |   |   |       ComponentA.styl
        |   |   |       ComponentA.spec.js
        |   `-- views/
        `-- core/
        |   `-- actions/
        |   `-- reducers/
        `-- style/
        |       main.styl
        | 
        app.jsx

## To do
- [ ] Add loaders for files & styles
- [ ] Is [nib](https://github.com/tj/nib) effective ? ([To read](https://github.com/shama/stylus-loader))
- [ ] Specify configuration
    - [Eslint](http://eslint.org/docs/user-guide/configuring)
