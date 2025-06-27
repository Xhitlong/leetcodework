
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n  = nums.length;

    for(let i = 0;i<n;){
        let index = nums[i]; 
         //如果元素值在1-n之间，并且当前元素的值和下标不对应 需要交换的数字的下标不在正确的位置上 执行替换
       // 如[4,2,3,4] 数组最后一个元素4已经在正确位置上了，不需要替换
        if(index>0 && index<=n && i!==index-1 && index!==nums[index-1]){
            swip(nums,i,index-1)
        }else{
            i++;
        }
    }
    for(let i=0;i<n;i++){
        // 下标没有对应上，直接返回i+1为最小正整数
        if(i+1!==nums[i]){
            return i+1;
        }
    }
    // 都对应上了最小正整数就是数组长度+1 如[1,2,3] 结果就是4
    return n+1;

    function swip(nums,i,j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
};