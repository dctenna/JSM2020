class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit8 extends Animal {
  constructor(name) {
    super(name); // fix - to add supper();
    this.created = Date.now();
  }
}

let rabbit8 = new Rabbit8('White Rabbit'); // Error: this is not defined
// alert(rabbit8.name);
