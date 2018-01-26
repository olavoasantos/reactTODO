/**
 * addTodo
 * ---
 * Adiciona um novo objeto tarefa à lista de tarefas.
 * 
 * @param {String}  title Título da tarefa
 */
export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    title
  };
}

/**
 * destroyTodo
 * ---
 * Remove um objeto tarefa da lista.
 * 
 * @param {Number} id Identificador do objeto tarefa
 */
export const destroyTodo = (id) => {
  return {
    type: 'DESTROY_TODO',
    id
  };
}

/**
 * toggleTodo
 * ---
 * Inverte o estado de uma tarefa entre completa e não-completa.
 * 
 * @param {Number}  completedItem  Identificador do objeto tarefa
 */
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

/**
 * setTodosFilter
 * ---
 * Define o filtro a ser aplicado pelo sistema.
 * 
 * @param {String} filter Nome do filtro
 */
export const setTodosFilter = (filter) => {
  return {
    type: 'SET_TODOS_FILTER',
    filter
  };
}

/**
 * setTodosOrder
 * ---
 * Define a direção de ordenação da lista ( ASC|DESC ).
 * 
 * @param {String} order Direção da ordenação
 */
export const setTodosOrder = (order) => {
  return {
    type: 'SET_TODOS_ORDER',
    order
  };
}
