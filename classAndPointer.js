// Class

class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie('Pink');
let cookieTow = new Cookie('Violete');
console.log(cookieOne);
console.log(cookieOne.color);
console.log(cookieTow.color);

// Pointers

let num1 = 5;
let num2 = num1;

console.log(num1);
console.log(num2);

num1 = 10;
console.log(num1);
console.log(num2);

let obj1 = {
  value: 'foo'
}
let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj1.value = 'bar'

console.log(obj1);
console.log(obj2);

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
}
let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
myLinkedList.push(11);
console.log(myLinkedList);