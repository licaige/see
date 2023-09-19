let Scope = require('./scope.js')

var a = 1;
function one() {
  var b = 2;
  function two() {
    var c = 3;
    console.log(a, b, c);
  }
  two();
}

one();

let globalScope = new Scope({name: 'global', params: ['a'], parent: null});
let oneScope = new Scope({name: 'one', params: ['b'], parent: globalScope});
let twoScope = new Scope({name: 'two', params: ['c'], parent: oneScope})

let aScope = twoScope.findDefiningScope('a');
console.log('----1', aScope.name);
let bScope = twoScope.findDefiningScope('b');
console.log('----2', bScope.name);
let cScope = twoScope.findDefiningScope('c');
console.log('----3', cScope.name);
let dScope = twoScope.findDefiningScope('d');
console.log('----4', dScope && dScope.name);