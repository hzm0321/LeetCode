import {concat} from '../../JSAssessment/practice05'
test('添加元素', () => {
  const arr = [1, 2, 3, 4, 5];
  const item = 6;
  expect(concat(arr,item)).toEqual([1, 2, 3, 4, 5, 6]);
});
