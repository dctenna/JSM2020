function throttle(func, ms) {
  let timer;
  let lastRun;

  return function() {
    const that = this;
    const args = arguments;

    if (!lastRun) {
      func.apply(that, args);
      lastRun = Date.now();
    } else {
      clearTimeout(timer);

      timer = setTimeout(function() {
        if (Date.now() - lastRun >= ms) {
          func.apply(that, args);
          lastRun = Date.now();
        }
      }, ms - (Date.now() - lastRun));
    }
  };
}
