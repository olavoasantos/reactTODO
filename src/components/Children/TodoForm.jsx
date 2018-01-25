import React, { Component } from 'react';

class TodoForm extends Component {

  constructor(props) {
    super(props);
    /** Define os states */
    this.state = { input: '' };

    /** Associa o objeto this nos métodos do componente */
    this.submit = this.submit.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onKeypress = this.onKeypress.bind(this);
  }

  /**
   * todo
   * ---
   * Retorna um novo Objeto tarefa com um dado título.
   * 
   * @param {String} title Título da tarefa
   */
  todo(title) {
    return {
      title: title,
      isComplete: false
    }
  }

  /**
   * submit
   * ---
   * Emite um evento para criar uma nova tarefa através do método
   * passado pelo prop 'onSubmit' e limpa o formulário. Caso o
   * state 'input' esteja vazio, a tarefa não é submetida.
   */
  submit() {
    if(! this.state.input) return;

    this.props.onSubmit(
      this.todo( this.state.input )
    );

    this.setState({ input: '' });
  }

  /**
   * onInput
   * ---
   * Função emitida quando o usuário altera o formulário de
   * adição. Quando chamada, atualiza o state com os
   * dados recebidos do usuário pelo input. 
   * 
   * @param {Event} e Evento
   */
  onInput(e) {
    this.setState({ input: e.target.value });
  }

  /**
   * onKeypress
   * ---
   * Função emitida quando o usuário aperta uma tecla no formulário.
   * Caso a tecla seja 'Enter' o formulário é submetido.
   * 
   * @param {Event} e Evento
   */
  onKeypress(e) {
    if(e.key === 'Enter') {
      this.submit();
    }
  }

  /** render */
  render() {
    return (
      <input
        type="text"
        onInput={this.onInput}
        value={this.state.input}
        className="todos-form__input"
        onKeyPress={this.onKeypress}
        placeholder={this.props.placeholder}
      />
    );
  }

}

export default TodoForm;
