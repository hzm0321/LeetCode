import {truncate} from '../../JSAssessment/practice06'
test('删除数组最后一个元素', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(truncate(arr)).toEqual([1, 2, 3, 4]);
});
