import {findAllOccurrences} from '../../JSAssessment/practice14'
test('查找元素位置', () => {
  const arr = [1, 2, 3];
  const target = 1
  expect(findAllOccurrences(arr, target)).toEqual([0]);
});
