class HashNode {
  constructor(key = null, value = null) {
    this.value = value;
    this.key = key;
    this.next = null;
  }
}

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.load = 0;
    this.buckets = [];
    for (let i = 0; i < this.capacity; i++) {
      this.buckets.push(new HashNode());
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    let currentNode = this.buckets[this.hash(key)];
    if (currentNode.next == null) {
      this.load++;
    }
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      if (currentNode.key == key) {
        currentNode.value = value;
        return;
      }
    }
    const newNode = new HashNode(key, value);
    currentNode.next = newNode;
  }

  get(key) {
    let currentNode = this.buckets[this.hash(key)];
    if (currentNode.next == null) {
      return null;
    }
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      if (currentNode.key == key) {
        return currentNode.value;
      }
    }
    return null;
  }

  has(key) {
    let currentNode = this.buckets[this.hash(key)];
    if (currentNode.next == null) {
      return false;
    }
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      if (currentNode.key == key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    if (!this.has(key)) {
      return false;
    }
    let currentNode = this.buckets[this.hash(key)].next;
    let prevNode = this.buckets[this.hash(key)];
    while (currentNode.key != key) {
      currentNode = currentNode.next;
      prevNode = prevNode.next;
    }
    prevNode.next = currentNode.next;
    return true;
  }

  length() {
    let count = 0;
    for (let bucket of this.buckets) {
      while (bucket.next != null) {
        count++;
        bucket = bucket.next;
      }
    }
    console.log(count);
  }

  clear() {
    for (let bucket of this.buckets) {
      bucket.next = null;
    }
  }
}

const h = new HashMap();
h.set("Sita", "first word");
h.set("helo", "second word");
h.set("Rama", "second word");
h.length();
