const buildTree = (inorder, postorder) => {
  const map = {};
  for (let i = 0; i < inorder.length; i++) { // 将节点值在inorder数组中的位置提前存入map
    map[inorder[i]] = i;
  }
  // 根据iStart到iEnd的inorder数组，和从pStart到pEnd的postorder数组构建当前子树
  const helper = (iStart, iEnd, pStart, pEnd) => { 
    if (pStart > pEnd || iStart > iEnd) { // 指针交错了，返回null节点
      return null;
    }
    const rootVal = postorder[pEnd]; // 获取当前要构建的根节点的值
    const mid = map[rootVal];        // 获取到它在inorder数组中的位置
    const leftNodeNum = mid - iStart; // 获取左子树的节点个数

    const root = new TreeNode(rootVal); // 创建节点
    root.left = helper(iStart, mid - 1, pStart, pStart + leftNodeNum - 1); // 用递归构建左子树
    root.right = helper(mid + 1, iEnd, pStart + leftNodeNum, pEnd - 1); // 用递归构建右子树

    return root; // 返回当前构建好的子树
  };

  return helper(0, inorder.length - 1, 0, postorder.length - 1); // 递归的入口
};