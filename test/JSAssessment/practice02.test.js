import {sum} from '../../JSAssessment/practice02'

test('数组求和', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(sum(arr)).toEqual(15)
});
