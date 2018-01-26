/** React */
import React, { Component } from 'react';

/** Redux */
import { connect } from 'react-redux';
import { setTodosFilter, setTodosOrder } from '../redux/actions';

/** Componentes filhos */
import Todo from './children/Todo.jsx';
import Form from './children/TodoForm.jsx';
import OrderTodos from './children/OrderTodos.jsx';
import FilterTodos from './children/FilterTodos.jsx';

class Todos extends Component {

  /** render */
  render() {
    return (
      <div className="todos">
        {/* Título */}
        <h1 className="todos-title">iTarefas</h1>

        {/* Header */}
        <div className="todos-header">
          {/* Formulário */}
          <Form placeholder="Adicionar nova tarefa" />
        </div>

        <div className="todos-stats">
          {/* Filtrar lista */}
          <FilterTodos />
          {/* Ordernar lista */}
          <OrderTodos />
        </div>

        {/* Lista de tarefas */}
        <div className="todos-items">
          {this.props.filtered.map(
            item => (
              <Todo item={item} key={`todo-${item.id}`} />
            )
          )}
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
      completed: state.completed,
      incomplete: state.incomplete,
      filtered: state.filtered,
    }
  },
  { setTodosFilter, setTodosOrder }
)( Todos );
