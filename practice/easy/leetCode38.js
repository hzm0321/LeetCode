/*
 * leetCode38 - 外观数列
 * @date: 2020/5/9
 */

export function countAndSay(n) {
  let i = 2;

  if (n === 1) {
    return '1';
  }
  if (n === 2) {
    return '11';
  }
  let start = '11';
  while (i < n) {
    let flag = start.charAt(0);
    let step = 1;
    let newStart = "";
    for (let j = 1; j <= start.length; j++) {
      if (flag === start[j]) {
        step++;
      } else {
        newStart+=`${step}${flag}`
        flag = start.charAt(j);
        step = 1;
      }
    }
    start = newStart;
    i++;
  }
  return start;
}
