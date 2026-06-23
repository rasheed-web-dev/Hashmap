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
    this.map = [];
    for (let i = 0; i < this.capacity; i++) {
      this.map.push(new HashNode());
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
    let currentNode = this.map[this.hash(key)];
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
}

const h = new HashMap();
h.set("Sita", "first word");
h.set("helo", "second word");
h.set("Rama", "second word");
console.log(h.map);
