import {splice} from '../../JSAssessment/practice04'

test('移除数组中的元素(原数组修改)', () => {
  const arr = [1, 2, 3, 4, 5, 2, 2];
  const item = 2;
  expect(splice(arr,item)).toEqual([1, 3, 4, 5]);
});
