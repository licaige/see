'use strict';

function util1 () {
  const b = 222;
  window.c = 'c';
  console.log('util1');
  return b
}

window.c = 'c';

class Mixer1 {
  constructor () {
    this.name1 = 'Lynne';
  }
  show () {
    console.log('1111');
  }
  hide () {
    this.name1 = 'hide-Lynne';
  }
  isShow () {
    return this.name1 === 'show-Lynne'
  }
}

let get = () => {
  util1();
  let a = 1;
  console.log(a);

  const getName = new Mixer1();

  console.log(getName.show());

  return a
};

get();
