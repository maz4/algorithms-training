class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!value) {
      return undefined;
    }

    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    let tempNode = this.root;
    while (true) {
      if (value < tempNode.value) {
        if (!tempNode.left) {
          tempNode.left = newNode;
          return this;
        }
        tempNode = tempNode.left;
      } else {
        if (!tempNode.right) {
          tempNode.right = newNode;
          return this;
        }
        tempNode = tempNode.right;
      }
    }
  }

  lookup(value) {
    if (!value) {
      return undefined;
    }

    if (!this.root) {
      return false;
    }

    let tempNode = this.root;

    while (tempNode) {
      if (value < tempNode.value) {
        tempNode = tempNode.left;
      } else if (value > tempNode.value) {
        tempNode = tempNode.right;
      } else if (tempNode.value === value) {
        return tempNode;
      }
    }

    return false;
  }
}

const myTree = new BinarySearchTree();

myTree.insert(9);
myTree.insert(20);
myTree.insert(4);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
myTree.insert(6);

console.log(JSON.stringify(myTree.lookup(21)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

console.log(traverse(myTree.root));
