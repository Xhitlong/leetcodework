/**
 * @param {string} s
 * @return {string[]}
 */
const LEN = 10;
var findRepeatedDnaSequences = function(s) {
    const cnts = new Map(), ans = [];
    for(let i=0;i<s.length-LEN+1;i++){
        let sub = s.substring(i, i+LEN);
        if(cnts.has(sub)){
            if(cnts.get(sub) == 1){
                ans.push(sub);
                cnts.set(sub, 2);
            }
        } else
            cnts.set(sub, 1);
    }
    return ans;
};