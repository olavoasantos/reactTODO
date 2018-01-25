/**
 * addTodo
 * ---
 * Adiciona um novo objeto tarefa à lista de tarefas.
 * 
 * @param {Object}  title Título da tarefa
 */
export const addTodo = (title) => {
  return {
    type: 'ADD_TODO',
    title
  };
}

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
 * @param {Object}  completedItem  Objeto tarefa
 */
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

export const setTodosFilter = (filter) => {
  return {
    type: 'SET_TODOS_FILTER',
    filter
  };
}

export const setTodosOrder = (order) => {
  return {
    type: 'SET_TODOS_ORDER',
    order
  };
}
