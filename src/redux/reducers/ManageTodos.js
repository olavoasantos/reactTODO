import filterTodos from './FilterTodos';
import orderTodos from './OrderTodos';

/**
 * ManageTodos
 * ---
 * @param {Object}  list  Lista de tarefas
 * @param {String}  order  Direção da ordenação
 * @param {String}  filter  Nome do filtro
 */
const ManageTodos = (list = [], order, filter) => {
  let newList = [...list];
  newList = orderTodos(newList, order);
  newList = filterTodos(newList, filter);
  
  return newList;
}

export default ManageTodos;
