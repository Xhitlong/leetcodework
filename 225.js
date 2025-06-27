var MyStack = function() {
    this.queue = [];  // 主要存储数据的队列
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // 注意这里是length-1而不是length，如果是length，那就跟原来的一样了
    // 比如 1 2 3 -> 2 3 1 -> 3 1 2 
    for (let i = 0; i < this.queue.length-1; i++) { 
        this.queue.push(this.queue.shift()); // 让最后一个元素排到前面
    }
    return this.queue.shift(); // 直接弹出最后一个入队的元素
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.queue[this.queue.length - 1];  // 获取 queue 最后一个元素
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};