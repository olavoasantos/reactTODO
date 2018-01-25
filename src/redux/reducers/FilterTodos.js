/**
 * FilterTodos
 * ---
 * Filtra os ítens de acordo com o estado 'filter'.
 * 
 * @param {Object}  list  Lista de tarefas
 * @param {String}  filter  Nome do filtro
 */
const FilterTodos = (list = [], filter) => {
  return filters[filter](list);
}

const filters = {
  all: (list) => list,
  completed: (list) => list.filter(item => item.isComplete),
  incomplete: (list) => list.filter(item => !item.isComplete)
}

export default FilterTodos;
