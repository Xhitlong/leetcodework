/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let res = nums.slice().fill(-1);
    let l = nums.length;
    nums = [...nums, ...nums];
    let stk = [];
    for (let i=0; i<nums.length; i++) {
        while (stk.length > 0 && nums[i] > nums[stk[stk.length-1]]) {
            let cur = stk.pop();
            if (cur >= l) cur -= l;
            let c = i >= l ? i-l : i;
            res[cur] = nums[c];
        }
        stk.push(i);
    }
    return res;
};