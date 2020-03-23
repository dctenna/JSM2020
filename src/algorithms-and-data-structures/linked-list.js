class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };
  }

  addToHead(value) {
    const node = new Node(value);
    this.head.next = node;

    return this;
  }

  addToLast(value) {
    const node = new Node(value);
    this.head = node;

    if (!this.head) {
      this.head = node;
    }

    const lastNode = this.head;

    while (lastNode.next) {
      this.lastNode = this.lastNode.next;
    }

    lastNode.next = node;

    return this;
  }

  getAtIndex(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      node = node.next;
      counter++;
    }

    return null;
  }

  addAtIndex(value, index) {
    if (index === 0) {
      this.addToHead(value);

      return this;
    }

    const previousNode = this.getAtIndex(index - 1);
    const nextNode = this.getAtIndex(index);
    const newNode = new Node(value);
    previousNode.next = newNode;
    newNode.next = nextNode;

    return this;
  }

  removeHead() {
    this.head = this.head.next;
    return this;
  }

  removeAtIndex(index) {
    if (index === 0) {
      this.removeHead();

      return this;
    }

    const parentOfNodeToRemove = this.getAtIndex(index - 1);
    const childOfNodeToRemove = this.getAtIndex(index + 1);
    parentOfNodeToRemove.next = childOfNodeToRemove;

    return this;
  };
}
