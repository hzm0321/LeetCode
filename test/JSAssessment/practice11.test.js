import {count} from '../../JSAssessment/practice11'
test('计数', () => {
  const arr = [1, 2, 3, 4, 4];
  const item = 4
  expect(count(arr, item)).toEqual(2);
});
