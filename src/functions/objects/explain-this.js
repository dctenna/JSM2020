let obj, method;

obj = {
  go: function() {
    alert(this);
  }
};

// obj.go(); // (1) [object Object] - dot is pointing to the obj, this is the obj

// (obj.go)(); // (2) [object Object] - dot is pointing to the obj, this is the obj, brackets before and after obj.go do nothing here.

// (method = obj.go)(); // (3) undefined - assignment operation doesn't save reference type information and this is lost here.

// (obj.go || obj.stop)(); // (4) undefined - comparison operation doesn't save reference type information and this is lost here
