import {duplicates} from '../../JSAssessment/practice12'
test('查找重复元素', () => {
  const arr = [1, 2, 4, 4, 3, 3, 1, 5, 3];
  expect(duplicates(arr)).toEqual([1, 3, 4]);
});
