/*
 * practice12 - 查找重复元素
 */

export function duplicates(arr) {
  if (arr instanceof Array ) {
    const obj = {}
    let res = []
    arr.forEach(item => {
      if (!obj[item]) {
        obj[item] = '1';
      } else {
        if (res.indexOf(item) === -1) {
          res.push(item);
        }
      }
    });
    res.sort()
    return res
  }
}

