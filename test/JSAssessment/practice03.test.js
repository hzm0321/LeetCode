import {remove} from '../../JSAssessment/practice03'

test('移除数组中的元素', () => {
  const arr = [1, 2, 3, 4, 5, 2, 2];
  const item = 2;
  expect(remove(arr,item)).toEqual([1, 3, 4, 5]);
});
