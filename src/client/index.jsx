import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import RenderRoutes from './components/helpers/RenderRoutes';
import configureStore from './store/configureStore';

const store = configureStore();
console.log(store)

const renderApp = () => ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <RenderRoutes routes={routes} />
      </BrowserRouter>
    </Provider>
  </AppContainer>
, document.getElementById('app'));

renderApp();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', renderApp);
}
