function makeUser() {
  return {
    name1: "John",
    ref: this
  };
}

let newUser = makeUser();

// alert(newUser.ref.name1);  // - undefined will be returned here. This is Window object.