let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

// apple and __proto__ is in the loop
for (let key in dictionary) {
//   alert(key); // "apple", then "__proto__"
}

// comma-separated list of properties by toString
// alert(dictionary); // "apple,__proto__"
