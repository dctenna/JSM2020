class Stack {
  constructor() {
    this.items = [];
  }

  addToStack(value) {
    this.items.push(value);
  }

  removeFromStack() {
    this.items.pop();
  }

  getLastElement() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}
