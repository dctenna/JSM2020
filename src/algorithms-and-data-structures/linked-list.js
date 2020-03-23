class Node {
  constructor(value, linkToNext = null) {
    this.value = value,
    this.linkToNext = linkToNext
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.addToHead = value => {
  const node = new Node(value, this.head);
  this.head = node;

  return this.head;
}

LinkedList.prototype.addToLast = value => {
  const node = new Node(value);
  this.head = node;

  if (!this.head) {
    this.head = node;
  }

  const lastNode = this.head;

  while(lastNode.linkToNext) {
    this.lastNode = this.lastNode.linkToNext;
  }

  lastNode.linkToNext = node;

  return this.head;
}

LinkedList.prototype.getAtIndex = index => {
  let counter = 0;
  let node = this.head;

  while(node) {
    if (counter === index) {
      return node;
    }

    node = node.linkToNext;
    counter ++;
  }

  return null;
}

LinkedList.prototype.addAtIndex = (value, index) => {
  if (index === 0) {
    this.addToHead(value);

    return this.head;
  }

  const previousNode = this.getAtIndex(index - 1);
  const nextNode = this.getAtIndex(index);
  const newNode = new Node(value);
  previousNode.linkToNext = newNode;
  newNode.linkToNext = nextNode;

  return this.head;
}

LinkedList.prototype.removeHead = () => {
  this.head = this.head.linkToNext;
  return this.head;
}

LinkedList.prototype.removeAtIndex = index => {
  if (index === 0) {
    this.removeHead();

    return this.head;
  }

  const parentOfNodeToRemove = this.getAtIndex(index - 1);
  const childOfNodeToRemove = this.getAtIndex(index + 1);
  parentOfNodeToRemove.linkToNext = childOfNodeToRemove;

  return this.head;
}
