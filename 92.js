/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 头插法
var reverseBetween = function (head, left, right) {
    let dumpNode = new ListNode(0, head), // 增加虚拟链头
        preTail = dumpNode
    let i = 0
    while (++i < left) {
        preTail = preTail.next // 前面子链的链尾
    }
    let cur = preTail.next, // 待反转子链的链头
        next // 后继节点
    while (++i <= right) {
        next = cur.next
        cur.next = next.next
        next.next = preTail.next //  将next插到链头
        preTail.next = next
    }
    return dumpNode.next
};