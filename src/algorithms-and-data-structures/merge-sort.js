function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  return sortSmallerArrays(mergeSort(left), mergeSort(right));
}

function sortSmallerArrays(left, right) {
  const sortedArray = [];

  let iLeft = 0;
  let iRight = 0;

  while (iLeft < left.length && iRight < right.length) {
    if (left[iLeft] <= right[iRight]) {
      sortedArray.push(left[iLeft]);
      iLeft++;
    } else {
      sortedArray.push(right[iRight]);
      iRight++;
    }
  }

  return [...sortedArray, ...left.slice(iLeft), ...right.slice(iRight)];
}
