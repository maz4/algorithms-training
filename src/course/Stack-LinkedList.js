class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    if (!value) {
      return undefined;
    }

    const newListNode = new ListNode(value);

    if (!this.top) {
      this.top = newListNode;
      this.bottom = newListNode;
    } else {
      newListNode.next = this.top;
      this.top = newListNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;

    return this;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }

    return false;
  }
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("youtube"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());
