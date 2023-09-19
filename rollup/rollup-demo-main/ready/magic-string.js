var MagicString = require('magic-string');
var magicString = new MagicString('export var name = "Lynne"');

// 返回magicString的拷贝，删除原始字符串开头和结尾符之前的内容
console.log(magicString.snip(0, 6).toString());

// 从开始到结束删除字符串（原始字符串而不是生成的字符串）
console.log(magicString.remove(0, 7).toString());

// 使用MagicString.Bundle可以联合多个源代码
let bundleString = new MagicString.Bundle();
bundleString.addSource({
  content: 'var name = Lynne1',
  separator: '\n'
})
bundleString.addSource({
  content: 'var name = Lynne2',
  separator: '\n'
})

console.log(bundleString.toString());