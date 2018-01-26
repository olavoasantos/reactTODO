/** React */
import React, { Component } from 'react';

/** Redux */
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';

class TodoForm extends Component {

  constructor(props) {
    super(props);

    /** Define os states */
    this.state = {
      input: '',
      isActive: false
    };
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

    this.props.addTodo(this.state.input);

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
    if(e.key === 'Escape') {
      this.input.blur();
    }
  }

  /**
   * activate
   * ---
   * Altera o estado do formulário para ativo
   * e foca no input.
   */
  activate() {
    this.setState({ isActive: true });
    this.input.focus();
  }

  /**
   * deactivate
   * ---
   * Altera o estado do formulário para desativo.
   */
  deactivate() {
    this.setState({ isActive: false });
  }

  /** render */
  render() {
    return (
      <div className={this.state.isActive ? "todos-form active" : "todos-form"}>

        {/* Input */}
        <input 
            onBlur={() => this.deactivate()}
            onInput={(e) => this.onInput(e)}
            ref={input => this.input = input}
            placeholder={this.props.placeholder}
            type="text" value={this.state.input}
            onKeyDown={(e) => this.onKeypress(e)}
            className={this.state.isActive ? "todos-form__input active" : "todos-form__input"}
        />

        {/* Botão de adição */}
        <span className="todos-form__add" onClick={() => this.activate()}>+</span>
        
      </div>
    );
  }

}

export default connect( null, { addTodo } )( TodoForm );
