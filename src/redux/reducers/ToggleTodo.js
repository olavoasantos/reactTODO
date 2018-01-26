/**
 * ToggleTodo
 * ---
 * Inverte o estado de uma tarefa entre completa e não-completa.
 * 
 * @param {Array}   list      Lista de tarefas
 * @param {Object}  item.id   Identificador da tarefa
 */
const ToggleTodo = (list = [], item) => {
  return list.map( todo => {
    if(todo.id === item.id) {
      todo.isComplete = !todo.isComplete;
    }

    return todo;
  });
}

export default ToggleTodo;
