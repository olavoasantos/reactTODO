/**
 * Import React.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Componentes
 */
import Todos from './components/Todos.jsx';


/** Estilos */
import './components/style/Todos.scss';

/**
 * Inicializar React.js no DOM
 */
ReactDOM.render(
  <Todos />,
  document.getElementById('app')
);
