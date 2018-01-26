/**
 * FilterTodos
 * ---
 * Filtra os ítens de acordo com o estado 'filter'.
 *
 * @param {Array}  list  Lista de tarefas
 * @param {String}  filter  Nome do filtro
 */
const FilterTodos = (list = [], filter) => {
  let completed = [],
      incomplete = [];

  // Classifica as tarefas entre as completas e as incompletas
  list.forEach(item => {
    item.isComplete ? completed.push(item) : incomplete.push(item);
  });

  return { all: list, completed, incomplete };
};

export default FilterTodos;
