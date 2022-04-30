class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // head can be initiated with ListNode as well
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let currentNode = this.head;
    const values = [];
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }

  _traverseIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  append(value) {
    // let newNode = {
    //   value: value,
    //   next: null,
    // };
    const newNode = new ListNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    // const newNode = { value: value, next: null };
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = {
      value: value,
      next: null,
    };

    const previousNode = this._traverseIndex(index - 1);
    const nextNode = previousNode.next;

    newNode.next = nextNode;
    previousNode.next = newNode;
    this.length++;

    return this.printList();
  }

  remove(index) {
    if (!index) {
      return undefined;
    }

    if (index === 0) {
      const newHead = this.head.next;
      this.head = newHead;
      this.length--;

      return this.printList();
    }

    const previousNode = this._traverseIndex(index - 1);
    const nodeToRemove = previousNode.next;
    previousNode.next = nodeToRemove.next;
    this.length--;

    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(22);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(1, 2);
myLinkedList.insert(0, 0);
console.log(myLinkedList.printList());
myLinkedList.remove(5);
console.log(myLinkedList.printList());
