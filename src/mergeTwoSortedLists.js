function mergeTwoListsEasySolution(list1, list2) {
  if (list1.length === 0 && list2.length === 0) {
    return [];
  }

  const mergedLists = list1.concat(list2);
  const sorted = mergedLists.sort((a, b) => {
    return a - b;
  });
  return sorted;
}

class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// to analyze
function mergeTwoLists(list1, list2) {
  let dummy = new ListNode();
  let head = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      head.next = list2;
      list2 = list2.next;
    } else {
      head.next = list1;
      list1 = list1.next;
    }
    head = head.next;
  }
  if (list1 !== null) {
    head.next = list1;
  } else {
    head.next = list2;
  }
  return dummy.next;
}

module.exports = {
  mergeTwoLists,
  mergeTwoListsEasySolution,
};
