// import css from './static/css/style.css';

import thunkMiddleware from 'redux-thunk';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers';

// Redux DevTools store enhancers
import {devTools, persistState} from 'redux-devtools';
// React components for Redux DevTools
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('content')
);
