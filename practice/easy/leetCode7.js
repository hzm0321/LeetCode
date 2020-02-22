/*
 * leetCode7 - 整数反转
 */

export function reverseInt(number) {
  if (number >= 0 && number <= 9) {
    return number
  }
  if (number >= -9 && number <= 0) {
    return number
  }
  let num
  // 小于0 提取符号位置
  let isF = false; // true 负数  false 正数
  if (number < 0) {
    isF = true;
    num = `${number}`.slice(1);
  } else {
    num = `${number}`
  }
  let t = [...num];
  // 交换数字
  for (let i = 0; i < parseInt(t.length / 2); i++) {
    // 交换
    const s = t[i];
    t[i] = t[t.length-i-1];
    t[t.length-i-1] = s;
  }
  // 判断交换完成首位是否为0
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== '0') {
      t = t.slice(i)
      break
    }
  }
  const res = isF ? ('-'+t.join('')) : t.join('')
  const rNumber = parseInt(res)
  // 判断32位有符号整数范围
  if (rNumber >= -2147483648 && rNumber <= 2147483647) {
    return rNumber;
  } else {
    return 0
  }
}

export function reverseInt2(number) {
  let b = 0
  while (number !== 0) {
    const t = number % 10
    number = parseInt(number / 10)
    b = b * 10 + t
  }
  if (b >= -2147483648 && b <= 2147483647) {
    return b;
  } else {
    return  0
  }
}

