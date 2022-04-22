export function mergeTwoListsEasySolution(
  list1: number[],
  list2: number[]
): number[] {
  if (list1.length === 0 && list2.length === 0) {
    return [];
  }

  const mergedLists = list1.concat(list2);
  const sorted = mergedLists.sort((a, b): any => {
    return a - b;
  });
  return sorted;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// to analyze
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
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
