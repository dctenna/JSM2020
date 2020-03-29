function spy(func) {
  function wrapper() {
    const args = [...arguments];
    wrapper.calls.push(...args);

    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}