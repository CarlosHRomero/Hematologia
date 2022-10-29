var Usuario = (function() {
    var nombre = "";
  
    var getName = function() {
        let nombre = window.localStorage.getItem('nombreKey');
        if (!nombre) {
            return "";
        }  
      return nombre;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      nombre = name;     
      localStorage.setItem('nombreKey', nombre);
    };
  
    return {
      getName: getName,
      setName: setName
    }
  
  })();
  
  export {Usuario};