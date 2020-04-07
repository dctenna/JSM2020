function f() {
  alert("Hello!");
}

Function.prototype.defer = function(ms) {
  setTimeout(this, 1000);
}

// f.defer(1000); // shows "Hello!" after 1 second
