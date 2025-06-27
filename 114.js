/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  /*
  函数的定义：给 flatten 函数输入一个节点 root，那么以 root 为根的二叉树就会被拉平为一条链表。
   */
  // base case
  if (root == null) return;

  flatten(root.left);
  flatten(root.right);

  // 1、左右子树已经被拉平成一条链表
  // 先用两个变量把原先的左右子树保存起来
  let left = root.left;
  let right = root.right;

  // 2、将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3、将原先的右子树接到当前右子树的末端
  while (root.right != null) {
    root = root.right;
  }
  root.right = right;
};