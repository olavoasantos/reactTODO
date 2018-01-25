/**
 * DestroyTodo
 * ---
 * Remove uma tarefa da lista de tarefas
 * 
 * @param {Object}  item.id  Identificador da tarefa
 */
const DestroyTodo = (state = [], item) => {
  return state.filter( todo => todo.id !== item.id );
}

export default DestroyTodo;
