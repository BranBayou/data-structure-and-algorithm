//Linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while(temp.next){
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}
let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
myLinkedList.push(11);
myLinkedList.push(23);
myLinkedList.pop();
console.log(myLinkedList);