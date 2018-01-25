import Todo from './Todo';
import toggleTodo from './ToggleTodo';
import destroyTodo from './DestroyTodo';
import manageTodos from './ManageTodos';
import Storage from '../../StorageWrapper';

export default (state = [], action) => {
  let todos;
  let storage = new Storage('todos');
  let store = storage.get() || {
    list: [],
    filtered: [],
    order: 'ASC',
    filter: 'all',
  };

  switch (action.type) {
    case 'ADD_TODO':
      todos = [ ...state.list, Todo(action) ];
      store = {
        list: todos,
        order: state.order,
        filter: state.filter,
        filtered: manageTodos(todos, state.order, state.filter)
      };
      break;

    case 'DESTROY_TODO':
      todos = destroyTodo(state.list, action);
      store = {
        list: todos,
        order: state.order,
        filter: state.filter,
        filtered: manageTodos(todos, state.order, state.filter)
      };
      break;

    case 'TOGGLE_TODO':
      todos = toggleTodo(state.list, action);
      store = {
        list: todos,
        order: state.order,
        filter: state.filter,
        filtered: manageTodos(todos, state.order, state.filter)
      };
      break;

    case 'SET_TODOS_FILTER':
      store = {
        order: state.order,
        filter: action.filter,
        list: [...state.list],
        filtered: manageTodos(state.list, state.order, action.filter)
      };
      break;

    case 'SET_TODOS_ORDER':
      store = {
        order: action.order,
        filter: state.filter,
        list: [...state.list],
        filtered: manageTodos(state.list, action.order, state.filter)
      };
      break;
  }

  storage.set(store);

  return store;
}