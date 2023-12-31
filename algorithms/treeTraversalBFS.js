// BST

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// class BST {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.root = newNode;
//   }
// }

// Method 2 

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return this;
    } 
    let temp = this.root;
    while(true) {
      if(newNode === temp.value) return undefined;
      if(newNode.value < temp.value) {
        if(temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if(temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if(this.root === null) return false;
    let temp = this.root;
    while(temp) {
      if(value < temp.value) {
        temp = temp.left;
      } else if(value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);
    while(queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }
}

let myBST = new BST();
myBST.insert(30);
myBST.insert(49);
myBST.insert(23);
myBST.insert(27);

console.log(myBST);
console.log(myBST.contains(24));
console.log(myBST.BFS());