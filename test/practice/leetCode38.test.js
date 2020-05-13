import { countAndSay } from "../../practice/easy/leetCode38";

test('外观数列3', () => {
  const number = 3;
  expect(countAndSay(number)).toEqual('21');
})

test('外观数列4', () => {
  const number = 4;
  expect(countAndSay(number)).toEqual('1211');
})

test('外观数列5', () => {
  const number = 5;
  expect(countAndSay(number)).toEqual('111221');
})

test('外观数列6', () => {
  const number = 6;
  expect(countAndSay(number)).toEqual('312211');
})


