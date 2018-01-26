/** React */
import React, { Component } from 'react';

/** Redux */
import { connect } from 'react-redux';
import { destroyTodo, toggleTodo } from '../../redux/actions';

/** Componentes filhos */
import DeleteIcon from './DeleteIcon.jsx';
import TodoCompletedIcon from './TodoCompletedIcon.jsx';
import TodoIncompleteIcon from './TodoIncompleteIcon.jsx';

class Todo extends Component {

  /**
   * complete
   * ---
   * Emite um evento para marcar um Objeto tarefa como completada ou não.
   * O evento é emitido acionando a função passada pelo prop 'complete'
   * à qual é passado o Objeto tarefa a ser modificado.
   */
  complete() {
    this.props.toggleTodo( this.props.item.id );
  }

  /**
   * destroy
   * ---
   * Emite um evento para remover um Objeto tarefa da lista principal. O
   * evento é emitido acionando a função passada pelo prop 'destroy'
   * à qual é passado o Objeto tarefa a ser destruído
   */
  destroy() {
    this.props.destroyTodo(this.props.item.id);
  }

  /** render */
  render() {
    const { item } = this.props;

    return (
      <div className="todos-todo animated flipInX">
        <span className={item.isComplete ? "todos-todo__active" : "todos-todo__inactive"}><TodoCompletedIcon /></span>
        <span className={item.isComplete ? "todos-todo__inactive" : "todos-todo__active"}><TodoIncompleteIcon /></span>
        <h2 onClick={() => this.complete()}
            className={item.isComplete ? "todos-todo__title complete" : "todos-todo__title"}>
          {
            (item.isComplete)
              ? <del>{item.title}</del>
              : <span>{item.title}</span>
          }
        </h2>
        <button className="todos-todo__destroy" onClick={() => this.destroy()}>
          <DeleteIcon />
        </button>
      </div>
    );
  }

}

export default connect(
  state => {
    return {
      list: state.list
    }
  },
  { destroyTodo, toggleTodo }
)( Todo );
