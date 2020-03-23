class Queue {
  constructor() {
    this.items = [];
  }

  addToQueue(value) {
    this.items.push(value);
  }

  removeFromQueue() {
    this.items.shift();
  }

  front() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}