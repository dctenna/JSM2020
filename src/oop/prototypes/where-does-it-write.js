let animal1 = {
  eat() {
    this.full = true;
  },
};

let rabbit1 = {
  __proto__: animal1,
};

rabbit1.eat();

//  If we call rabbit.eat(), which object receives the full property: animal1 or rabbit1?
//  rabbit1 is before dot, this is rabbit1, rabbit1 receives the full property.
