/*
 * leetCode101 - 对称二叉树
 * @date: 2020/5/31
 */


export function isSymmetric(root) {
  function check(left, right) {
    // 情况1,左右子树都不存在
    if (!left && !right) {
      return true;
    }
    // 情况2, 左右子树存在
    if (left && right) {
      // 左子树和右子树相等
      return left.val === right.val &&
        check(left.left, right.right) &&
        check(left.right, right.left);
    }
    return false;
  }

  return !root || check(root.left, root.right);
}
