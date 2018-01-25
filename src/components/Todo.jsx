import React, { Component } from 'react';

import DeleteIcon from './DeleteIcon.jsx';

class Todo extends Component {

  constructor(props) {
    super(props);
    /** Associa o objeto this nos métodos do componente */
    this.destroy = this.destroy.bind(this);
    this.complete = this.complete.bind(this);
  }

  /**
   * complete
   * ---
   * Emite um evento para marcar um Objeto tarefa como completada ou não.
   * O evento é emitido acionando a função passada pelo prop 'complete'
   * à qual é passado o Objeto tarefa a ser modificado.
   */
  complete() {
    this.props.complete( this.props.item );
  }

  /**
   * destroy
   * ---
   * Emite um evento para remover um Objeto tarefa da lista principal. O
   * evento é emitido acionando a função passada pelo prop 'destroy'
   * à qual é passado o Objeto tarefa a ser destruído
   */
  destroy() {
    this.props.destroy( this.props.item );
  }

  /** render */
  render() {
    const item = this.props.item;

    return (
      <div className="todos:todo">
        <h2 onClick={this.complete}
            className={item.isComplete ? "todos:todo-title complete" : "todos:todo-title"}>
          {
            (item.isComplete)
              ? <del>{item.title}</del>
              : <span>{item.title}</span>
          }
        </h2>
        <button className="todos:todo-destroy" onClick={this.destroy}>
          <DeleteIcon />
        </button>
      </div>
    );
  }

}

export default Todo;
