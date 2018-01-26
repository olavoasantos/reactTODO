/**
 * StorageMock
 * ---
 * localStorage não existe no ambiente de teste. Para codigos
 * que fazem uso dessa ferramenta, é necessário a criação
 * de uma estrutura que simule seu comportamento.
 * 
 * Solução encontrada em:
 * https://github.com/facebook/jest/issues/2098
 */
var localStorageMock = (function() {
  var store = {};

  return {
      getItem: function(key) {
          return store[key] || null;
      },
      setItem: function(key, value) {
          store[key] = value.toString();
      },
      clear: function() {
          store = {};
      }
  };

})();

Object.defineProperty(window, 'localStorage', {
   value: localStorageMock
});
