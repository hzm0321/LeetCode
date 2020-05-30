/*
 * leetCode67 - 二进制求和
 * @date: 2020/5/24
 */

export function addBinary(a, b) {
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength + 1, '0');
  b = b.padStart(maxLength + 1, '0');
  const r = [];
  let flag = false;
  // 开始从后往前遍历
  for (let i = maxLength; i >= 0; i--) {
    let t;
    if (flag) {
      t = parseInt(a[i]) + parseInt(b[i]) + 1;
    } else {
      t = parseInt(a[i]) + parseInt(b[i]);
    }
    flag = t >= 2;
    r.unshift(t % 2);
  }
  // 去除首位为零
  if (r[0] == '0') {
    r.splice(0, 1);
  }
  Big
  return r.join('');
}

export function addBinary2(a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
}
