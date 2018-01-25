/** React */
import React, { Component } from 'react';

/** Redux */
import { connect } from 'react-redux';
import { setTodosFilter, setTodosOrder } from '../redux/actions';

/** Componentes filhos */
import Todo from './Children/Todo.jsx';
import Form from './Children/TodoForm.jsx';
import OrderTodos from './Children/OrderTodos.jsx';
import FilterTodos from './Children/FilterTodos.jsx';

class Todos extends Component {

  /** render */
  render() {
    return (
      <div className="todos">
        {/* Título */}
        <h1 className="todos-title">iTarefas</h1>
        
        {/* Formulário */}
        <div className="todos-form">
          <Form placeholder="Adicionar nova tarefa" />
        </div>

        {/* Header */}
        <div className="todos-header">
          {/* Filtrar lista */}
          <FilterTodos />
        
          {/* Ordernar lista */}
          <OrderTodos />
        </div>
        
        {/* Lista de tarefas */}
        <div className="todos-items">
          {this.props.filtered.map(item => {
            return (
              <Todo item={item} key={`todo-${item.id}`} />
            );
          })}
        </div>
      </div>
    );
  }

}

export default connect(
  state => {
    return {
      list: state.list,
      order: state.order,
      filter: state.filter,
      filtered: state.filtered
    }
  },
  { setTodosFilter, setTodosOrder }
)( Todos );
