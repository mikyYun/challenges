/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// list1 = 1|2 2|4 4|null
// list2 = 1|3 3|4 4|null

// NOTE
// first mergeTwoLists method return a whole node list (list1 or list2)
// use recursion update next node
const mergeTwoLists = (list1, list2) => {
  // current value
  // list1.val
  // list2.val
  // console.log(list1.val, list1.next)
  // if .next is null -> compare with self
 
  // lower node
  if (list1.val < list2.val) {
    // update list1.next
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
// const list1 = [1, 2, 4];
// const list2 = [1, 3, 4];
// mergeTwoLists(list1, list2);