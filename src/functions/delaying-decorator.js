function delay(func, ms) {
  return function() {
    const args = [...arguments];
    const boundFunc = func.bind(this, args);

    setTimeout(boundFunc, ms);
  };
}
