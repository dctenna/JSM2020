class HashTable {
  constructor() {
    this.length = 0;
    this.items = {};
  }

  hasItem(key) {
    return this.items.hasOwnProperty(key);
  }

  setItem(key, value) {
    this.items[key] = value;
  }

  removeItem(key) {
    if (this.hasItem(key)) {
      delete this.items[key];
    }
  }

  each(fn) {
    for (let key in this.items) {
      if (this.hasItem(key)) {
        fn(key, this.items[key]);
      }
    }
  }
}