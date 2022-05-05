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

  remove(value) {
    // not working
    if (!value || !this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode) {
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.left;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.right;
          }
        } else if (currentNode.right.left === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } else {
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;

          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = null;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }

        return true;
      }
    }
  }

  remove2(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
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
// myTree.remove(1);
myTree.remove2(1);
console.log(traverse(myTree.root));
