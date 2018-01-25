/**
 * Import React.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Import Redux
 */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './redux/reducers';

/**
 * Componentes
 */
import Todos from './components/Todos.jsx';


/** Estilos */
import './components/style/Todos.scss';

/**
 * Inicializar Redux
 */
const store = createStore( Reducers );

/**
 * Inicializar React.js no DOM
 */
ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById('app')
);
