/** React */
import React, { Component } from 'react';

/** Redux */
import { connect } from 'react-redux';
import { setTodosOrder } from '../../redux/actions';

class OrderTodos extends Component {

  /**
   * orderBy
   * ---
   * Ordena as tarefa de pela ordem de adição e salva a lista no storage.
   * 
   * @param {String}  order Direção de ordenação ( ASC|DESC )
   */
  orderBy(order) {
    if (order === this.props.order) return;

    this.props.setTodosOrder(order);
  }

  render() {
    return (
      <div className="todos-orderBy">
        <span>Ordenar por: </span>
        {/* Mais recentes */}
        <button onClick={() => this.orderBy('DESC')}
                className={(this.props.order==='DESC') ? 'todos-orderBy__button todos-orderBy__desc active' : 'todos-orderBy__button todos-orderBy__desc'}>
          Mais recentes
        </button>

        {/* Mais antigas */}
        <button onClick={() => this.orderBy('ASC')}
                className={(this.props.order==='ASC') ? 'todos-orderBy__button todos-orderBy__asc active' : 'todos-orderBy__button todos-orderBy__asc'}>
          Mais antigas
        </button>
      </div>
    );
  }

}

export default connect(
  state => {
    return {
      order: state.order,
    }
  },
  { setTodosOrder }
)( OrderTodos );
