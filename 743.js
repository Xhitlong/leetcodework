/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const N = 6000010, M = 110;
    let e = new Array(M), ne = new Array(M), w = new Array(M), h = new Array(M).fill(-1), idx = 0;
    let dist = new Array(M).fill(N);
    function add(a, b, c) {
        e[idx] = b, w[idx] = c, ne[idx] = h[a], h[a] = idx ++;
    }
    for(let i of times) add(i[0], i[1], i[2]);
    function spfa() {
        let q = new Array();
        let st = new Array(M).fill(false);
        q.push(k);dist[k] = 0;
        while(q.length) {
            let t = q.shift();
            st[t] = false;
            
            for(let i = h[t]; ~i; i = ne[i]) {
                let j = e[i];
                if(dist[j] > w[i] + dist[t]) {
                    dist[j] = w[i] + dist[t];
                    if(st[j]) continue;
                    st[j] = true;
                    q.push(j);
                }
            }
        }
    }
    spfa();
    let ans = 0;
    for(let i = 1; i <= n; i ++) {
        if(dist[i] > ans) {
            ans = dist[i];
        }
    }
    return ans === N ? -1 : ans;
};