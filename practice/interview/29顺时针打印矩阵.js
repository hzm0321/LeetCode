/*
 * leetCode面试题29 - 顺时针打印矩阵
 * @date: 2020/6/5
 */
export function spiralOrder(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  // 定义上下左右四个边界
  let left = 0,
    right = matrix[0].length - 1,
    top = 0,
    bottom = matrix.length - 1;
  const res = [];
  // 往里收缩
  while (left < right && top < bottom) {
    // 上面一行
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i]);
    }
    // 右侧一行
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right]);
    }
    // 下侧一行
    for (let i = right; i > left; i--) {
      res.push(matrix[bottom][i])
    }
    // 左侧一行
    for (let i = bottom; i > top; i--) {
      res.push(matrix[i][left])
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  // 判断最后剩下的一行或一列
  if (left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][left]);
    }
  } else if (top === bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
  }
  return res;
}
