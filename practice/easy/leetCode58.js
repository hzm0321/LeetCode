/*
 * leetCode53 - 最后一个单词的长度
 * @date: 2020/5/16
 */

export function lengthOfLastWord(s) {
  const str = s.trimEnd().split(' ');
  return str[str.length-1].length;
  // if (res === 0 && str.length > 1){
  //   return str[str.length-2].length
  // }else {
  //   return res;
  // }
}
