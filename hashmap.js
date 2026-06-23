class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.keys = [];
    this.map = {};
  }

  hash(key) {
    if (!this.keys.includes(key)) {
      this.keys.push(key);
    }
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const exists = this.map[this.hash(key)];
    if (!exists) {
      this.map[this.hash(key)] = value;
    } else {
    }
  }
}

const h = new HashMap();
h.set("hello", "first word");
h.set("helo", "second word");
h.set("hello", "second word");
console.log(h.map);
console.log(h.keys);
