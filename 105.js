var buildTree = function(preorder, inorder) {
    const n = preorder.length;
    const index = new Map();
    for (let i = 0; i < n; i++) {
        index.set(inorder[i], i);
    }

    function dfs(preL, preR, inL, inR) {
        if (preL === preR) { // 空节点
            return null;
        }
        const leftSize = index.get(preorder[preL]) - inL; // 左子树的大小
        const left = dfs(preL + 1, preL + 1 + leftSize, inL, inL + leftSize);
        const right = dfs(preL + 1 + leftSize, preR, inL + 1 + leftSize, inR);
        return new TreeNode(preorder[preL], left, right);
    }
    return dfs(0, n, 0, n); // 左闭右开区间
};