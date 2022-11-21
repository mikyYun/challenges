function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const deleteDuplicates = (head) => {
  // if head.val && head.next => run
  // else return head (head.val = exist, head.val = undefined)
  // edge
  if (head === null || head.next === null) return head;
  if (head.next !== null) {
    if (head.val === head.next.val) {
      head = deleteDuplicates(head.next);
    } else {
      head.next = deleteDuplicates(head.next);
    }
  }

  return head;

};
const head = [1, 1, 2, 3, 4];
console.log(deleteDuplicates(head));
