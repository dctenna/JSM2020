const calculator = {
  read() {
    this.firstValue = parseFloat(prompt("Please, enter a value of a"));
    this.secondValue = parseFloat(prompt("Please, enter a value of b"));
  },

  sum() {
    return this.firstValue + this.secondValue;
  },

  mul() {
    return this.firstValue * this.secondValue;
  }
};