/**
 * todo
 * ---
 * Retorna um novo Objeto tarefa com um dado título.
 * 
 * @param {String} action.title Título da tarefa
 */
const todo = (action) => {
  return {
    id: (new Date()).getTime(),
    title: action.title,
    isComplete: false
  }
}

export default todo;
