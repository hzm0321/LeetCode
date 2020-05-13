/*
 * DpTime - dp时间规划
 * @date: 2020/5/9
 * @author: HZM <zhenmin.huang@hand-china.com>
 * @version: 0.0.1
 * @copyright Copyright (c) 2019, Hand
 */

class Obj {
  constructor(start, end, value) {
    this.start = start;
    this.end = end;
    this.value = value;
  }
}



const record = [];
let prev;
let objs;


(function () {
  objs = [
    new Obj(1, 4, 5),
    new Obj(3, 5, 1),
    new Obj(0, 6, 8),
    new Obj(4, 7, 4),
    new Obj(3, 8, 6),
    new Obj(5, 9, 3),
    new Obj(6, 10, 2),
    new Obj(8, 11, 4)
  ];

  prev = objs.map((item, index) => {
    // 当前时间
    const startTime = item.start;
    // 遍历前面，看end时间
    for (let i = index - 1; i > 0; i--) {
      if (objs[i].end <= startTime) {
        return i
      }
    }
    return 0;
  })
})()

export function OPT(i) {
  if (record[i]) {
    return record[i];
  }
  const q = Math.max(OPT(i - 1), OPT(prev[i]) + objs[i])
  record[i] = q;
  return q;
}

