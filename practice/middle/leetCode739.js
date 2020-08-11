/*
 * leetCode739 - 每日温度
 * @date: 2020/6/11
 */

export function dailyTemperatures(T) {
  const result = [];
  for (let i = 0; i < T.length; i++) {
    const cur = T[i];
    // 查找有没有比T[i]小的
    let flag = 1; // 移动的位数
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > cur) {
        result.push(flag);
        break;
      }
      // 都没比cur大的
      if (j === T.length - 1) {
        result.push(0);
      }
      flag++;
    }
  }
  result.push(0);
  return result;
}
