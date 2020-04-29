import {insert} from '../../JSAssessment/practice10'
test('数组合并', () => {
  const arr = [1, 2, 4];
  const item = 3
  const index = 2
  expect(insert(arr, item, index)).toEqual([1, 2, 3, 4]);
});
