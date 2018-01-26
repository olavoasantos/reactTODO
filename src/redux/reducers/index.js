import Todo from './Todo';
import toggleTodo from './ToggleTodo';
import destroyTodo from './DestroyTodo';
import manageTodos from './ManageTodos';
import Storage from '../../StorageWrapper';

export default (state = [], action) => {
  let todos, orderedList;
  let storage = new Storage('todos');
  let store = storage.get() || {
    list: [],
    filtered: [],
    order: 'ASC',
    filter: 'all',
    completed: [],
    incomplete: [],
  };

  switch (action.type) {
    case 'ADD_TODO':
      todos = [ ...state.list, Todo(action) ];
      orderedList = manageTodos(todos, state.order, state.filter);
      store = {
        list: todos,
        order: state.order,
        filter: state.filter,
        completed: orderedList['completed'],
        incomplete: orderedList['incomplete'],
        filtered: orderedList[state.filter]
      };
      break;

    case 'DESTROY_TODO':
      todos = destroyTodo(state.list, action);
      orderedList = manageTodos(todos, state.order, state.filter);
      store = {
        list: todos,
        order: state.order,
        filter: state.filter,
        completed: orderedList['completed'],
        incomplete: orderedList['incomplete'],
        filtered: orderedList[state.filter]
      };
      break;

    case 'TOGGLE_TODO':
      todos = toggleTodo(state.list, action);
      orderedList = manageTodos(todos, state.order, state.filter);
      store = {
        list: todos,
        order: state.order,
        filter: state.filter,
        completed: orderedList['completed'],
        incomplete: orderedList['incomplete'],
        filtered: orderedList[state.filter]
      };
      break;

    case 'SET_TODOS_FILTER':
      orderedList = manageTodos(state.list, state.order, action.filter);
      store = {
        order: state.order,
        filter: action.filter,
        list: [...state.list],
        completed: orderedList['completed'],
        incomplete: orderedList['incomplete'],
        filtered: orderedList[action.filter]
      };
      break;

    case 'SET_TODOS_ORDER':
      orderedList = manageTodos(state.list, action.order, state.filter);
      store = {
        order: action.order,
        filter: state.filter,
        list: [...state.list],
        completed: orderedList['completed'],
        incomplete: orderedList['incomplete'],
        filtered: orderedList[state.filter]
      };
      break;
  }

  storage.set(store);

  return store;
}