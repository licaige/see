export class Person {
  constructor ({ name, age, sex }) {
    this.className = 'Person'
    this.name = name
    this.age = age
    this.sex = sex
  }
  getName () {
    return this.name
  }
}
export class Apple {
  constructor ({ model }) {
    this.className = 'Apple'
    this.model = model
  }
  static displayName = "Point";

  getModel () {
    return this.model
  }
	getName () {
    return this.className
  }
}
