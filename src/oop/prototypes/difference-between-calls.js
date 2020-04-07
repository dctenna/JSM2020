function Rabbit7(name) {
  this.name = name;
}
Rabbit7.prototype.sayHi = function () {
//   alert(this.name);
};

let rabbit7 = new Rabbit7('Rabbit');

rabbit7.sayHi();  // Rabbit
Rabbit7.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit7).sayHi(); // undefined
rabbit7.__proto__.sayHi(); // undefined
