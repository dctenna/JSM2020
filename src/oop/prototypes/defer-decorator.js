function f(a, b) {
  alert(a + b);
}

Function.prototype.defer1 = function (ms) {
  const func = this;

  return function(a, b) {
    setTimeout(() => func.call(this, a, b), ms);
  }
}

// f.defer1(1000)(1, 2); // shows 3 after 1 second
