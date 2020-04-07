class Rabbit9 extends Object {
  constructor(name) {
    super();   // fix: to call super();
    this.name = name;
  }
}

let rabbit9 = new Rabbit9('Rab');

// alert(rabbit9.hasOwnProperty('name'));
