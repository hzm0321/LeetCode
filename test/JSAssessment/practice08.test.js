import {curtail} from '../../JSAssessment/practice08'
test('删除数组第一个元素', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(curtail(arr)).toEqual([ 2, 3, 4, 5]);
});
