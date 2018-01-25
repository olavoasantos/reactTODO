import Storage from '../StorageWrapper';
import React, { Component } from 'react';

/** Components filhos */
import Todo from './Todo.jsx';
import Form from './TodoForm.jsx';

class Todos extends Component {

  constructor(props) {
    super(props);
    /** Inicializa o wrapper do localStorage */
    this.storage = new Storage('todos');
    this.orderByStorage = new Storage('orderBy');

    /** Define os states */
    this.state = {
      order: this.orderByStorage.get() || 'ASC',
      filter: 'all',
      list: this.storage.get() || [
        // Exmplo de tarefas
        {title: 'Buscar empregos', isComplete: true},
        {title: 'Encontrar uma empresa de excelência', isComplete: true},
        {title: 'Enviar currículo', isComplete: true},
        {title: 'Receber ligação', isComplete: true},
        {title: 'Ficar muito animado =x', isComplete: true},
        {title: 'Receber desafio', isComplete: true},
        {title: 'Programar por muitas horas', isComplete: true},
        {title: 'Finalizar e enviar desafio', isComplete: true},
        {title: 'Ficar na expectativa de ser chamado para a entrevista', isComplete: true},
        {title: 'Ser chamado para a entrevista', isComplete: false},
        {title: 'Ser contratado pele empresa de excelência', isComplete: false},
      ]
    };

    /** Associa o objeto this nos métodos do componente */
    this.addTodo = this.addTodo.bind(this);
    this.destroyItem = this.destroyItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }

  /**
   * addTodo
   * ---
   * Adiciona um novo objeto tarefa à lista de tarefas.
   * 
   * @param {Object}  todo Objeto tarefa
   */
  addTodo(todo) {
    let list = this.state.list;
    list.push(todo);

    this.storage.set(list);
    this.setState({ list });
  }

  /**
   * completeItem
   * ---
   * Inverte o estado de uma tarefa entre completa e não-completa.
   * 
   * @param {Object}  completedItem  Objeto tarefa
   */
  completeItem(completedItem) {
    let list = this.state.list.map(item => {
      if (item === completedItem) {
        item.isComplete = !item.isComplete;
      }

      return item;
    });

    this.storage.set(list);
    this.setState({ list });
  }

  /**
   * destroyItem
   * ---
   * Remove uma tarefa da lista de tarefas e salva a lista no storage.
   * 
   * @param {Object}  destroidItem  Objeto tarefa
   */
  destroyItem(destroidItem) {
    let list = this.state.list.filter(item => item !== destroidItem);

    this.storage.set(list);
    this.setState({ list });
  }

  /**
   * orderBy
   * ---
   * Ordena as tarefa de pela ordem de adição e salva a lista no storage.
   * 
   * @param {String}  order Direção de ordenação ( ASC|DESC )
   */
  orderBy(order) {
    if (order === this.state.order) return;

    let list = this.state.list;
    list.reverse();

    this.setState({ list, order });
    this.storage.set(list);
    this.orderByStorage.set(order);
  }

  /**
   * filterBy
   * ---
   * Altera o state 'filter'.
   * 
   * @param {String}  filter  Nome do filtro
   */
  filterBy(filter) {
    if (filter === this.state.filter) return;

    this.setState({ filter });
  }

  /**
   * filter
   * ---
   * Filtra os ítens de acordo com o estado 'filter'.
   *
   * @param   {Array} list  Lista de tarefas
   * @returns {Array} Lista filtrada de tarefas
   */
  filter(list) {
    return list.filter(item => {
      /** Retorna todas as tarefas */
      if (this.state.filter === 'all') {
        return true;
      }

      /** Retorna as tarefas completadas */
      if (this.state.filter === 'completed') {
        return item.isComplete;
      }

      /** Retorna as tarefas não completadas */
      if (this.state.filter === 'incomplete') {
        return !item.isComplete;
      }
    });
  }

  /**
   * list
   * ---
   * Aplica o filtro na lista de tarefas e retorna uma Array
   * com os ítens que devem ser exibidos.
   * 
   * @returns {Array} Lista filtrada de tarefas
   */
  list() {
    return this.filter(this.state.list);
  }

  /** render */
  render() {
    return (
      <div className="todos">
        {/* Título */}
        <h1 className="todos:title">iTarefas</h1>
        
        {/* Formulário */}
        <div className="todos:form">
          <Form onSubmit={this.addTodo} placeholder="Adicionar nova tarefa" />
        </div>

        {/* Header */}
        <div className="todos:header">
          {/* Filtrar lista */}
          <div className="todos:filterBy">
            <div>Exibir:</div>
            {/* Mostrar todas as tarefas */}
            <button onClick={() => this.filterBy('all')}
                    className={(this.state.filter==='all') ? 'todos:filterBy-button active' : 'todos:filterBy-button'}>
              Todas
            </button>
            {/* Mostrar tarefas completadas */}
            <button onClick={() => this.filterBy('completed')}
                    className={(this.state.filter==='completed') ? 'todos:filterBy-button active' : 'todos:filterBy-button'}>
              Completadas
            </button>
            {/* Mostrar tarefas não completadas */}
            <button onClick={() => this.filterBy('incomplete')}
                    className={(this.state.filter==='incomplete') ? 'todos:filterBy-button active' : 'todos:filterBy-button'}>
              Não completadas
            </button>
          </div>
        
          {/* Ordernar lista */}
          <div className="todos:orderBy">

            {/* Mais recentes */}
            <button onClick={() => this.orderBy('DESC')}
                    className={(this.state.order==='DESC') ? 'todos:orderBy-button active' : 'todos:orderBy-button'}>
              Mais recentes
            </button>

            {/* Mais antigas */}
            <button onClick={() => this.orderBy('ASC')}
                    className={(this.state.order==='ASC') ? 'todos:orderBy-button active' : 'todos:orderBy-button'}>
              Mais antigas
            </button>
          </div>
        </div>
        
        {/* Lista de tarefas */}
        <div className="todos:items">
          {this.list().map((item, key) => {
            return (
              <Todo
                item={item}
                key={`todo-${key}`}
                destroy={this.destroyItem}
                complete={this.completeItem}
              />
            );
          })}
        </div>
      </div>
    );
  }

}

export default Todos;
