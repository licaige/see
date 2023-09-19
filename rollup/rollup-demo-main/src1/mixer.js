export default class Mixer1 {
  constructor () {
    this.name1 = 'Lynne'
  }
  show () {
    console.log('1111')
  }
  hide () {
    this.name1 = 'hide-Lynne'
  }
  isShow () {
    return this.name1 === 'show-Lynne'
  }
}

export class Mixer2 {
  constructor () {
    this.name2 = 'Lynne'
  }
  show () {
    this.name2 = 'show-Lynne'
  }
  hide () {
    this.name2 = 'hide-Lynne'
  }
  isShow () {
    return this.name2 === 'show-Lynne'
  }
}