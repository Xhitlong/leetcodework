var findCircleNum = function(isConnected) {
    let num = 0;
    let n = isConnected.length;
    // 建立并查集
    const uf = new UnionFind(n);
    // 遍历连接
    for (let row = 0; row < n; row++) {
        for(let col = 0; col < n; col++){
            if (isConnected[row][col] === 1) 
                uf.union(row, col);
        }
    }
    // 根节点是自身的则是一个连通分量
    for (let i = 0; i < n; i++) {
        if (uf.findRoot(i)==i)
            num++;
    }
    return num;
};

class UnionFind {
    constructor(num) { // num 表示顶点个数
        this.parents = new Array(num);
        this.ranks = new Array(num);  //记录树的高度
        for (let i = 0; i < num; i++) {
            this.parents[i] = -1;
            this.ranks[i] = 0;
        }
    }
    findRoot(x) { // 找出顶点x的根节点
        let x_root = x;
        while (this.parents[x_root] !== -1) { // 找到尽头
            x_root = this.parents[x_root];
        }
        return x_root; // 返回根节点
    }
    union(x, y) { // 把顶点x和顶点y所在的集合合并到一起
        let x_root = this.findRoot(x);
        let y_root = this.findRoot(y);
        if (x_root === y_root) return;
        let x_rank = this.ranks[x_root];
        let y_rank = this.ranks[y_root];
        if (x_rank < y_rank) {    // 高度大的作为根节点
            this.parents[x_root] = y_root;
        } else if (y_rank < x_rank) {
            this.parents[y_root] = x_root;
        } else {                  // 一样高，都可以根节点都行
            this.parents[y_root] = x_root;
            this.ranks[x_root]++;
        }   
    }
}