var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }

    // 复制每个节点，把新节点直接插到原节点的后面
    for (let cur = head; cur; cur = cur.next.next) {
        cur.next = new _Node(cur.val, cur.next, null);
    }

    // 遍历交错链表中的原链表节点
    for (let cur = head; cur; cur = cur.next.next) {
        if (cur.random) {
            // 要复制的 random 是 cur.random 的下一个节点
            cur.next.random = cur.random.next;
        }
    }

    // 把交错链表分离成两个链表
    const newHead = head.next;
    let cur = head;
    for (; cur.next.next; cur = cur.next) {
        const copy = cur.next;
        cur.next = copy.next; // 恢复原节点的 next
        copy.next = copy.next.next; // 设置新节点的 next
    }
    cur.next = null; // 恢复原节点的 next
    return newHead;
};