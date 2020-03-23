const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    while (j !== 0 && array[j] >= array[i]) {
      j--;
    }

    if (array[j] >= array[i]) {
      array.splice(j, 0, array[i]);
      array.splice(i + 1, 1);
    } else {
      array.splice(j + 1, 0, array[i]);
      array.splice(i + 1, 1);
    }
  }

  return array;
};
