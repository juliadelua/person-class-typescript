export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;

  constructor(
    firstname: string,
    middlename: string,
    lastname: string,
    age: number
  ) {
    this.firstName = firstname;
    this.middleName = middlename;
    this.lastName = lastname;
    this.age = age;
  }

  getFullName() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }

  getBirthdayYear() {
    return 2022 - this.age;
  }
}
