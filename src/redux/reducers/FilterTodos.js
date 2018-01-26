/**
 * FilterTodos
 * ---
 * Filtra os ítens de acordo com o estado 'filter'.
 * 
 * @param {Object}  list  Lista de tarefas
 * @param {String}  filter  Nome do filtro
 */
const FilterTodos = (list = [], filter) => {
  let completed = [];
  let incomplete = [];
  list.forEach(item => {
    item.isComplete
      ? completed.push(item)
      : incomplete.push(item);
  });

  return {
    all: list,
    completed,
    incomplete
  }
}

const filters = {
  all: (list) => list,
  completed: (list) => list.filter(item => item.isComplete),
  incomplete: (list) => list.filter(item => !item.isComplete)
}

export default FilterTodos;
