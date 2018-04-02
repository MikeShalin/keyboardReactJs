import {createStore, applyMiddleware, compose} from 'redux';
import levelMiddleware from './middlewares/levelMiddleware/';
import traningStringMiddleware from './middlewares/traningStringMiddleware/';
import rootReducer from './reducers';

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
          levelMiddleware,
          traningStringMiddleware
      ),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
