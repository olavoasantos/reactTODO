/** React */
import React, { Component } from 'react';

/** Redux */
import { connect } from 'react-redux';
import { setTodosFilter } from '../../redux/actions';

class FilterTodos extends Component {

  /**
   * filterBy
   * ---
   * Altera o state 'filter'.
   * 
   * @param {String}  filter  Nome do filtro
   */
  filterBy(filter) {
    if (filter === this.props.filter) return;

    this.props.setTodosFilter(filter);
  }

  /** render */
  render() {
    return (
      <div className='todos-filterBy'>
        {/* <div>Exibir:</div> */}

        {/* Mostrar todas as tarefas */}
        <button onClick={() => this.filterBy('all')}
                className={(this.props.filter==='all') ? 'todos-filterBy__button todos-filterBy__all active' : 'todos-filterBy__button todos-filterBy__all'}>
          Todas
        </button>

        {/* Mostrar tarefas completadas */}
        <button onClick={() => this.filterBy('completed')}
                className={(this.props.filter==='completed') ? 'todos-filterBy__button todos-filterBy__completed active' : 'todos-filterBy__button todos-filterBy__completed'}>
          Completadas
        </button>

        {/* Mostrar tarefas não completadas */}
        <button onClick={() => this.filterBy('incomplete')}
                className={(this.props.filter==='incomplete') ? 'todos-filterBy__button todos-filterBy__incomplete active' : 'todos-filterBy__button todos-filterBy__incomplete'}>
          Não completadas
        </button>
      </div>
    )
  }

}

export default connect(
  state => {
    return {
      list: state.list,
      filter: state.filter,
      completed: state.completed,
      incomplete: state.incomplete,
    }
  },
  { setTodosFilter }
)( FilterTodos );
