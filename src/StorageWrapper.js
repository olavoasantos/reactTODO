/**
 * Esse é apenas um wrapper do localStorage
 * para facilitar a * syntaxe e deixar
 * o código mais legível.
 */
class StorageWrapper {

  constructor(name) {
    /** Nome de armazenamento */
    this.name = name;
  }

  /**
   * set
   * ---
   * Salva dados com um nome especificado do localStorage.
   * 
   * @param {Mixed} data  Dados armazenados
   */
  set(data) {
    localStorage.setItem(this.name, JSON.stringify(data));
  }

  /**
   * get
   * ---
   * Lê os dados salvos com o nome especificado do localStorage.
   * 
   * @returns {Mixed} Stored data
   */
  get() {
    return JSON.parse( localStorage.getItem(this.name) );
  }

  /**
   * remove
   * ---
   * Remove os dados com o nome especificado do localStorage.
   */
  remove() {
    localStorage.removeItem(this.name);
  }

  /**
   * clear
   * ---
   * Limpa os dados armazenados no localStorage.
   */
  clear() {
    localStorage.clear();
  }

}

export default StorageWrapper;
