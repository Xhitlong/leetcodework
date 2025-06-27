var partition = function(head, x) {
    let pA = a = new ListNode(0), pB = b = new ListNode(0)
    while (head) {
        head.val < x ? a = a.next = head : b = b.next = head
        head = head.next
    }
    a.next = pB.next
    b.next = null
    return pA.next
};