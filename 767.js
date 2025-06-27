var reorganizeString = function(s) {
    const n = s.length;
    const count = Array(26).fill(0);
    let m = 0;
    let mch;
    for (const ch of s) {
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if (++count[idx] > m) {
            m = count[idx];
            mch = ch;
        }
    }
    if (m > n - m + 1) {
        return "";
    }

    const ans = Array(n);
    let i = 0;
    for (; m--; i += 2) {
        ans[i] = mch; // 先填出现次数最多的字母
    }
    count[mch.charCodeAt(0) - 'a'.charCodeAt(0)] = 0;

    // 再填其它字母
    for (let j = 0; j < 26; j++) {
        let cnt = count[j];
        while (cnt--) {
            if (i >= n) {
                i = 1; // 填完偶数填奇数
            }
            ans[i] = String.fromCharCode('a'.charCodeAt(0) + j);
            i += 2;
        }
    }
    return ans.join('');
}