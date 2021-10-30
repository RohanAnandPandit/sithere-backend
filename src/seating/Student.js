export default class Student {
  constructor({ id, firstName, lastName, age }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toString() {
    return this.id;
  }
}
