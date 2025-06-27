/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length == k) return '0'
    let stack = []
    for(let i = 0; i < num.length; i++){
        while(stack.length && stack[stack.length - 1] > num[i] && k){
            stack.pop()
            k--
        }
        stack.push(Number(num[i]))
    }
    while(k){
        stack.pop()
        k--
    }
    while(stack.length >1 && stack[0] == '0'){
        stack.shift()
    }
    return stack.join('')
};