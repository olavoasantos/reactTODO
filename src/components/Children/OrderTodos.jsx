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

  /** render */
  render() {
    return (
      <div className='todos-orderBy'>
        <select value={this.props.filter} className='todos-orderBy__select' onChange={(e) => this.orderBy(e.target.value)}>
          <option disabled value=''>Ordenar por</option>
          <option value='ASC'>Mais antigas</option>
          <option value='DESC'>Mais recentes</option>
        </select>
      </div>
    );
  }

}

export default connect(
  state => { return { order: state.order, } },
  { setTodosOrder }
)( OrderTodos );
