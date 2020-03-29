let user = {
  name: 'John',
  go: function() {
    alert(this.name);
  }
} // semicolon is mandatory here to avoid syntax error

// (user.go());
