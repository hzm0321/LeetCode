import {parse2Int} from '../../JSAssessment/practice15'

test('正确使用parseInt', () => {
  const num = '0x12';
  expect(parse2Int(num)).toEqual(0);
});

test('正确使用parseInt', () => {
  const num = '12';
  expect(parse2Int(num)).toEqual(12);
});
