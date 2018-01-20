# web__react-redux-postcss-webpack-hot--no-ssr

## Tutorial

1. Install React:
```
yarn add react react-dom react-prop-types react-router-dom
```

2. Install Babel
```
yarn add babel-core babel-preset-env babel-preset-react babel-preset-stage-1  -D
/*
Stages represent the status of experimental features. Pre stage-3 should be used with caution.
Beyond ES7, proposed JavaScript features can exist in various stages:
stage-0 - Strawman: just an idea, possible Babel plugin.
stage-1 - Proposal: this is worth working on.
stage-2 - Draft: initial spec.
stage-3 - Candidate: complete spec and initial browser implementations.
stage-4 - Finished: will be added to the next yearly release.
*/
yarn add react-hot-loader -D
/* reload just this components where you did changes */
css-hot-loader
```

3. Install Webpack and Webpack loaderes/plugins
```
yarn add webpack webpack-dev-server -D
yarn add postcss-loader css-loader style-loader babel-loader html-webpack-plugin -D
```

4. Install PostCSS plugins
```
yarn add postcss-import postcss-css-variables postcss-apply postcss-nesting postcss-cssnext postcss-clean -D
```

5. Config Babel - .babelrc
```
/*
Secondly, we set modules to false to ensure that import statements are left as is (opposed to transpiling them to require). We're doing this to give Webpack the ability to statically analyze our code to produce more efficient bundles.
*/
```

6. Config Webpack - webpack.config.js
```
debtool: //https://webpack.js.org/configuration/devtool/
/*
  output: {
    publicPath: '/',
potrzebne do ścieżek zagnieżdżonych '/page1/page2/'
*/
/*
This gives us the ability to use import Styles from './styles.css' syntax (or destructuring like this import { style1, style2 } from './styles.css').
Then we can use it like this in a React app:
<div className={Style.style1}>Hello World</div>
<div className={style1}>Hello World</div>
*/
/*
Camel case gives us the ability to write our CSS rules like this:
.home-button {...}
And use it in our React files like this:
import { homeButton } from './styles.css'
*/

/*
react-hot-loader/patch — Activate HMR for React
publicPath: ‘/’ — Hot reloading won’t work as expected for nested routes without it
webpack.NamedModulesPlugin — Enable HMR globally
webpack.HotModuleReplacementPlugin — Prints more readable module names in the browser terminal on HMR updates
webpack.NoEmitOnErrorsPlugin — Do not emit compiled assets that include errors
hot: true — Enable HMR on the server
*/
```

6. Production
```
yarn add extract-text-webpack-plugin uglifyjs-webpack-plugin -D
```
```
yarn add shx cross-env -D
```

7. Add Redux
```
yarn add redux react-redux redux-thunk
```

8. 
```
yarn add babel-polyfill