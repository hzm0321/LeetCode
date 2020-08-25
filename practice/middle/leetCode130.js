/*
 * leetCode130 - 每日温度
 * @date: 2020/8/11
 */

const board = [[1, 2, 3]];


export const solve = (board) => {

  // 遍历边界内,把不在边界上的字符变为X
  const r = board.length; // 行数
  const l = board[0] && board[0].length; // 列数

  // 深度优先搜索
  const dfs = (i, j) => {
    // 越界判断
    if (i < 0 || i >= r || j < 0 || j >= l || board[i][j] !== 'O') {
      return;
    }
    board[i][j] = '*';
    dfs(i, j - 1);
    dfs(i, j + 1);
    dfs(i - 1, j);
    dfs(i + 1, j);
  }


  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      if (i === 0 || i === r - 1 || j === 0 || j === l - 1) {
        if (board[i][j] === 'O') {
          dfs(i, j);
        }
      }
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < l; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "*") {
        board[i][j] = "O";
      }
    }
  }
  return board;
}
