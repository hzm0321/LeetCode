import {indexOf} from '../../JSAssessment/practice01'

test('查找数组元素位置', () => {
  const arr = [1, 2, 3, 4, 5];
  const item = 3;
  expect(indexOf(arr, item)).toEqual(2)
});
