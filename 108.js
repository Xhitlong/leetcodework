const buildBST = (nums, start, end) => {
    if (start > end) { // 构成不了区间，返回null
      return null;
    }

    const midIndex = (start + end) >>> 1; // 求中间索引
    const root = new TreeNode(nums[midIndex]); // 构建当前节点

    root.left = buildBST(nums, start, midIndex - 1); // 构建左子树
    root.right = buildBST(nums, midIndex + 1, end); // 构建右子树

    return root;
};

var sortedArrayToBST = function(nums) {
    return buildBST(nums, 0, nums.length - 1); // 递归的入口
};