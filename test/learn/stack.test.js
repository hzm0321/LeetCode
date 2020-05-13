import { decimalToBinary } from "../../learn/StackByObject";

test('十进制转二进制', () => {
  let number = 233;
  expect(decimalToBinary(number)).toEqual(11101001);
})
