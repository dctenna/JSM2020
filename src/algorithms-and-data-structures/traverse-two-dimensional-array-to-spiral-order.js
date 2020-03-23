const Direction = {
  Right: 0,
  Down: 1,
  Left: 2,
  Up: 3
};

const traverseTwoDimensionalArrayToSpiral = (
  array,
  rowsNumber,
  columnsNumber
) => {
  const spiralArray = [];
  let top = 0;
  let bottom = rowsNumber - 1;
  let left = 0;
  let right = columnsNumber - 1;

  let direction = Direction.Right;

  while (top <= bottom && left <= right) {
    if (direction === Direction.Right) {
      for (let i = left; i <= right; i++) {
        spiralArray.push(array[top][i]);
      }
      top++;

    } else if (direction === Direction.Down) {
      for (let i = top; i <= bottom; i++) {
        spiralArray.push(array[i][right]);
      }
      right--;

    } else if (direction === Direction.Left) {
      for (i = right; i >= left; i--) {
        spiralArray.push(array[bottom][i]);
      }
      bottom--;

    } else if (direction === Direction.Up) {
      for (i = bottom; i >= top; i--) {
        spiralArray.push(array[i][left]);
      }
      left++;

    }
    direction = (direction + 1) % 4;
  }

  return spiralArray;
};
