/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const n = nums.length;
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        let key = getKey(nums[i], t+1)
        if(map.has(key)) {
            return true
        }
        if(map.has(key + 1) && Math.abs(map.get(key+1) - nums[i]) <= t) {
            return true
        }
        if(map.has(key - 1) && Math.abs(map.get(key-1) - nums[i]) <= t) {
            return true
        }
        map.set(key, nums[i])
        if(i - k >= 0) {
            map.delete(getKey(nums[i-k],t+1))
        }
    }
    return false
};

const getKey = (x,t) => {
    return Math.floor(x / t)
}