class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}
class LinkedList {
  constructor() {
    const h = new Node();
    this.head = h;
  }

  append(value) {
    const tmp = new Node();
    tmp.value = value;
    let iterator = this.head;
    while (iterator.next != null) {
      iterator = iterator.next;
    }
    iterator.next = tmp;
  }

  prepend(value) {
    const tmp = new Node();
    tmp.value = value;
    if (this.head.next == null) {
      this.head.next = tmp;
      return;
    }
    tmp.next = this.head.next;
    this.head.next = tmp;
  }

  size() {
    let sum = 0;
    let tmp = this.head;
    while (tmp.next != null) {
      sum++;
      tmp = tmp.next;
    }
    return sum;
  }

  getHead() {
    if (this.head.next != null) {
      return this.head.next.value;
    }
    return undefined;
  }

  getTail() {
    if (this.head.next == null) {
      return undefined;
    }
    let iterator = this.head;
    while (iterator.next != null) {
      iterator = iterator.next;
    }
    return iterator.value;
  }

  at(index) {
    if (this.head.next == null) {
      return undefined;
    }
    let tmp = this.head.next;
    let i = 0;
    while (i < index) {
      tmp = tmp.next;
      i++;
    }
    if (tmp) {
      return tmp.value;
    }
    return undefined;
  }

  pop() {
    if (this.head.next == null) {
      return undefined;
    }
    const val = this.head.next.value;
    this.head.next = this.head.next.next;
    return val;
  }

  contains(val) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.value == val) {
        return true;
      }
      tmp = tmp.next;
    }
    return false;
  }

  findIndex(val) {
    if (this.head.next == null) {
      return -1;
    }
    let tmp = this.head;
    let i = 0;
    while (tmp != null) {
      if (tmp.value == val) {
        return i;
      }
      i++;
      tmp = tmp.next;
    }
    return -1;
  }

  insertAt(index, ...vals) {
    if (index < 0 || index > this.size()) {
      throw RangeError("out of bound");
    }
    let tmp = this.head;
    let i = 0;
    while (i < index) {
      tmp = tmp.next;
      i++;
    }
    for (let n of vals) {
      let newNode = new Node();
      newNode.value = n;
      newNode.next = tmp.next;
      tmp.next = newNode;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size() - 1) {
      throw RangeError("out of bound");
    }
    if (index == 0) {
      this.head.next = this.head.next.next;
      return;
    }
    let last = this.head;
    let tmp = this.head.next;
    let i = 0;
    while (i < index) {
      last = tmp;
      tmp = tmp.next;
      i++;
    }
    last.next = tmp.next;
  }

  toString() {
    if (this.head.next == null) {
      return "null";
    }
    let str = "";
    let iterator = this.head.next;
    while (iterator != null) {
      str += `(${iterator.value}) -> `;
      iterator = iterator.next;
    }
    str += "null";
    return str;
  }
}

export { LinkedList };
