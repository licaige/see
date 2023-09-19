const acorn = require("acorn")

let walk = require('./walk');

const ast = acorn.parse(`
import $ from 'jQuery';
`, {location: true, ranges: true, sourceType: 'module', ecmaVersion: 8});

let indent = 0;
const padding = () => " ".repeat(indent);
ast.body.forEach(statement => {
  walk(statement, {
    enter(node) {
      if (node.type) {
        console.log(padding() + node.type);
        indent += 2;
      }
    },
    leave(node) {
      if (node.type) {
        indent -= 2;
        console.log(padding() + node.type);
      }
    }
  })
})