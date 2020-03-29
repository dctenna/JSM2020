function debounceFirstCallNotInvoked(func, ms) {
  let timer;

  return function wrapper() {
    clearTimeout(timer);
    const args = [...arguments];
    const boundFunc = func.bind(this, args);

    timer = setTimeout(boundFunc, ms);
  };
}

function debounceFirstCallInvoked(func, ms) {
  let shouldWait = false;

  return function wrapper() {
    if (shouldWait) { return; }

    func.apply(this, arguments);

    shouldWait = true;
    setTimeout(() => (shouldWait = false), ms);
  }
}