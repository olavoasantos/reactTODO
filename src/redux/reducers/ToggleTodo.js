/**
 * ToggleTodo
 * ---
 * Inverte o estado de uma tarefa entre completa e não-completa.
 * 
 * @param {Object}  item.id  Identificador da tarefa
 */
const ToggleTodo = (state = [], item) => {
  return state.map( todo => {
    if(todo.id === item.id) {
      todo.isComplete = !todo.isComplete;
    }

    return todo;
  });
}

export default ToggleTodo;
