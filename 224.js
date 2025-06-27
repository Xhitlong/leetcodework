var calculate = function (s) {
    let ans = 0;
    let num_stack = [];
    let op_stack = [];
    let sign = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') continue;
        if (s[i] == '+' || s[i] == '-') sign = s[i] == '+' ? 1 : -1;
        else if (s[i] >= '0' && s[i] <= '9') {
            let num = parseInt(s[i]);
            while (i < s.length - 1 && s[i + 1] >= '0' && s[i + 1] <= '9') {
                num = num * 10 + parseInt(s[++i]);
            }
            ans += sign * num;
        } else if (s[i] == '(') {
            num_stack.push(ans);
            op_stack.push(sign);
            ans = 0;
            sign = 1;
        } else {
            ans = num_stack.pop() + ans * op_stack.pop();
        }
    }
    return ans;
};