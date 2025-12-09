class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

 
  getInfo() {
    return `Ismi: ${this.name}, Yoshi: ${this.age}`;
  }

  
  getReverseInfo() {
    return `Yoshi: ${this.age}, Ismi: ${this.name}`;
  }
}

const user1 = new Person("Sevara", 17);

console.log(user1.getInfo());        
console.log(user1.getReverseInfo()); 
