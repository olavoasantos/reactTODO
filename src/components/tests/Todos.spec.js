/** React */
import React from 'react';

/** Redux */
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from '../../redux/reducers';

/** Components filhos */
import Todos from '../Todos';

/** Outros */
import { isString } from 'util';

describe('<Todos />', () => {
  /**
   * > Limpar localStorage
   * > Criar nova Store
   * > Montar o component antes de cada teste
   */
  let store;
  let wrapper;
  beforeEach(() => {
    localStorage.clear();
    store = createStore( Reducers );
    wrapper = mount(
      <Provider store={store}>
        <Todos />
      </Provider>
    );
  });

  it('sees a title', () => {
    let title = find(".todos-title");

    expect( see(title) ).toBeTruthy();
    expect( title.text() ).toBe("iTarefas");
  });

  it('sees a form input', () => {
    let input = find(".todos-form__input");

    expect( see(input) ).toBeTruthy();
    expect( input.type() ).toBe("input");
  });

  it('does not add an empty todo to the list from the form', () => {
    expect( isEmpty(find('.todos-items')) ).toBe(true);

    let input = find('.todos-form__input');
        press(input, 'Enter');

    expect( isEmpty( find('.todos-items') ) ).toBe(true);
  });

  it('adds a new todo list from the form', () => {
    expect( isEmpty(find('.todos-items')) ).toBe(true);

    /** Sequência armazenada como função addTodo (ver abaixo) */
    let input = find('.todos-form__input');
        type(input, 'New todo');
        press(input, 'Enter');

    expect( isEmpty( find('.todos-items') ) ).toBe(false);
    expect( countChildren('.todos-items') ).toBe(1);
  });

  it('it sees a todo\'s title and delete button', () => {
    addTodo("New todo")

    expect( see('.todos-todo__destroy') ).toBe(true);
    expect( see('.todos-todo__title') ).toBe(true);
    expect( find('.todos-todo__title').text() ).toBe("New todo");
  });

  it('completes an existing todo when it clicks on the title', () => {
    addTodo("New Todo");
    
    let todoTitle = find(".todos-todo__title");
    expect(todoTitle.hasClass('complete')).toBe(false);
    
    click( todoTitle );
    todoTitle = find(".todos-todo__title");
    expect( todoTitle.hasClass('complete') ).toBe(true);
  });

  it('sets to incomplete a completed todo when it clicks on the title', () => {
    addTodo("New Todo");
    
    let todoTitle = find(".todos-todo__title");
    click( todoTitle );
    
    click( todoTitle );
    todoTitle = find(".todos-todo__title");
    expect( todoTitle.hasClass('complete') ).toBe(false);
  });
  
  it('deletes an existing todo when it clicks on the todo\'s delete button', () => {
    addTodo("New Todo 1");
    addTodo("New Todo 2");
    addTodo("New Todo 3");
    
    let todo = find(".todos-todo").at(1);
    click( todo.find(".todos-todo__destroy") );

    let todos = find(".todos-items");

    expect( countChildren( todos ) ).toBe(2);
    expect( todos.contains("New Todo 1") ).toBe(true);
    expect( todos.contains("New Todo 2") ).toBe(false);
    expect( todos.contains("New Todo 3") ).toBe(true);
  });
  
  it('sees a collection of order buttons', () => {
    let oredering = find(".todos-orderBy__button");
    
    expect( oredering.exists() ).toBeTruthy();
    expect( count( oredering ) ).toBe(2);
  });

  it('orders the todos from oldest to newest by default', () => {
    addTodo("Todo 1");
    addTodo("Todo 2");
    addTodo("Todo 3");

    let todos = find(".todos-todo");
    expect( todos.at(0).text() ).toBe("Todo 1")
    expect( todos.at(1).text() ).toBe("Todo 2")
    expect( todos.at(2).text() ).toBe("Todo 3")
  });

  it('orders the todos from newest to oldest when the DESC order button is clicked', () => {
    addTodo("Todo 1");
    addTodo("Todo 2");
    addTodo("Todo 3");

    click(".todos-orderBy__desc");

    let todos = find(".todos-todo");
    expect( todos.at(0).text() ).toBe("Todo 3")
    expect( todos.at(1).text() ).toBe("Todo 2")
    expect( todos.at(2).text() ).toBe("Todo 1")
  });

  it('orders the todos from oldest to newest when the ASC order button is clicked after the DESC button was clicked', () => {
    addTodo("Todo 1");
    addTodo("Todo 2");
    addTodo("Todo 3");

    click(".todos-orderBy__desc");
    click(".todos-orderBy__asc");

    let todos = find(".todos-todo");
    expect( todos.at(0).text() ).toBe("Todo 1")
    expect( todos.at(1).text() ).toBe("Todo 2")
    expect( todos.at(2).text() ).toBe("Todo 3")
  });
  
  it('sees a collection of filter buttons', () => {
    let filters = find(".todos-filterBy__button");

    expect( filters.exists() ).toBeTruthy();
    expect( count( filters ) ).toBe(3);
  });
  
  it('sees only the completed todos when the completed filter button is clicked', () => {
    addTodo("Todo 1");
    addTodo("Todo 2");
    addTodo("Todo 3");

    let todo = find(".todos-todo").at(1);
    click( todo.find(".todos-todo__title") );
    expect( countChildren(".todos-items") ).toBe(3);

    click(".todos-filterBy__completed");
    expect( countChildren(".todos-items") ).toBe(1);
  });
  
  it('sees only the completed todos when the incomplete filter button is clicked', () => {
    addTodo("Todo 1");
    addTodo("Todo 2");
    addTodo("Todo 3");

    let todo = find(".todos-todo").at(1);
    click( todo.find(".todos-todo__title") );
    expect( countChildren(".todos-items") ).toBe(3);

    click(".todos-filterBy__incomplete");
    expect( countChildren(".todos-items") ).toBe(2);
  });
  
  it('sees all the todos when the all filter button is clicked after another fitler button', () => {
    addTodo("Todo 1");
    addTodo("Todo 2");
    addTodo("Todo 3");

    let todo = find(".todos-todo").at(1);
    click( todo.find(".todos-todo__title") );
    
    click(".todos-filterBy__incomplete");
    expect( countChildren(".todos-items") ).toBe(2);
    click(".todos-filterBy__all");
    expect( countChildren(".todos-items") ).toBe(3);
  });
  
  // Helpers
  const addTodo = (title) => {
    let input = find('.todos-form__input');
        type(input, title);
        press(input, 'Enter');
  }

  const find = (el) => {
    return wrapper.find(el);
  }
  
  const see = (el) => {
    el = isString(el) ? wrapper.find(el) : el;

    return el.exists();
  }
  
  const classes = (el) => {
    el = isString(el) ? wrapper.find(el) : el;
    let list = el.html().match(/class=\"(.+)\"/);
    
    return list ? list[1].split(" ") : null;
  }
  
  const count = (el) => {
    el = isString(el) ? wrapper.find(el) : el;

    return el.length;
  }

  const click = (el) => {
    el = isString(el) ? wrapper.find(el) : el;
    el.simulate('click');
  }

  const type = (el, value) => {
    el = isString(el) ? wrapper.find(el) : el;
    el.simulate('input', {
      target: {value}
    });
  }

  const press = (el, key) => {
    el = isString(el) ? wrapper.find(el) : el;
    el.simulate('keypress', { key });
  }

  const isEmpty = (el) => {
    el = isString(el) ? wrapper.find(el) : el;
    
    return el.children().length === 0;
  }

  const countChildren = (el) => {
    el = isString(el) ? wrapper.find(el) : el;
    
    return el.children().length;
  }

});
