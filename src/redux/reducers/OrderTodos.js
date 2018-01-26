/**
 * OrderTodos
 * ---
 * @param {Object}  list  Lista de tarefas
 * @param {String}  order  Direção da ordenação
 */
const OrderTodos = (list = [], order) => {
  return sort[order](list);
}

/**
 * Funções de ordenação de cada direção.
 */
const sort = {
  ASC: list => list,
  DESC: list => list.reverse()
}

export default OrderTodos;
