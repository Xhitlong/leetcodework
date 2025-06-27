/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
let len1 = s1.length,
    len2 = s2.length,
    len3 = s3.length,
    dp = Array(len1+1);
    if(len1+len2 !== len3) return false;
    if(len1===0) return s2 === s3;
    if(len2===0) return s1 === s3;
    for(let i = 0;i <= len1;i++){
      dp[i] = Array(len2+1)
    }
    dp[0][0] = true
    for(let i = 0 ; i <= len1; i++){
      for(let j=0; j<= len2; j++){
        let p = i+j;
        // 关系式中涉及i-1，j-1,避免越界区分判断
        if(i > 0){
          dp[i][j] = (s3[p-1] === s1[i-1] && dp[i-1][j]) || Boolean(dp[i][j])
        }
        if(j > 0){
          dp[i][j] = Boolean(dp[i][j]) || (s3[p-1] === s2[j-1] && dp[i][j-1])
        }
      }
    }
    return dp[len1][len2];
};