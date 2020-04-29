import {prepend} from '../../JSAssessment/practice07'
test('添加元素', () => {
  const arr = [1, 2, 3, 4, 5];
  const item = 6
  expect(prepend(arr, item)).toEqual([6, 1, 2, 3, 4, 5]);
});
