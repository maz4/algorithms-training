class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);
    return this;
  }

  pop() {
    this.stack.pop();
    return this;
  }

  isEmpty() {
    return this.stack.length === 0;
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
