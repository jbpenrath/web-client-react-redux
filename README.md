# web-client-react-redux
A starter kit to quickly start to develop a web app using react & redux.

## Commands
- Development: `npm start`
- Clean: `npm run clean`
- Build for production: `npm run build`

## Stack
- build: [Webpack 2](https://webpack.js.org)
- styles: [Stylus](http://stylus-lang.com) with postcss ([autoprefixer](https://github.com/postcss/autoprefixer))
- View | Controller: [react](https://facebook.github.io/react/)
- Model | Controller: [redux](http://redux.js.org)

## Folder tree
    .
    `-- config/
    |   webpack.dev.config.js
    |   webpack.production.config.js
    |
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
        |   `-- actions/
        |   `-- reducers/
        |
        `-- style/
        |   main.styl
        |   reset.styl
        | 
        app.jsx

## To do
- [x] Add loaders for files (fonts, images) & styles
- [ ] Is [nib](https://github.com/tj/nib) effective ? ([To read](https://github.com/shama/stylus-loader))
- [ ] Specify configuration
    - [Eslint](http://eslint.org/docs/user-guide/configuring)
