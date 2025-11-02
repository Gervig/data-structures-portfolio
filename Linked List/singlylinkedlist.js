export default class SinglyLinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  // Helper method to create a new node
  _createNode(data, next = null) {
    return { data, next };
  }

  // Print the whole list (for debugging)
  printList() {
    let current = this.head;
    let index = 0;
    while (current) {
      console.log(
        `[${index}] data: ${JSON.stringify(current.data)}, next: ${
          current.next ? "→" : "null"
        }`
      );
      current = current.next;
      index++;
    }
    if (this._size === 0) console.log("(empty list)");
  }

  // ========================
  // === DATA-LEVEL API ===
  // ========================

  add(data) {
    const newNode = this._createNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
    this._size++;
  }

  get(index) {
    return this.getNode(index)?.data ?? null;
  }

  getFirst() {
    return this.head ? this.head.data : null;
  }

  getLast() {
    const lastNode = this.getLastNode();
    return lastNode ? lastNode.data : null;
  }

  set(index, data) {
    const node = this.getNode(index);
    if (!node) throw RangeError(`Index ${index} out of range`);
    node.data = data;
  }

  insert(index, data) {
    if (index < 0 || index > this._size) {
      throw RangeError(`Index ${index} out of range`);
    }

    const newNode = this._createNode(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const prev = this.getNode(index - 1);
      newNode.next = prev.next;
      prev.next = newNode;
    }
    this._size++;
  }

  remove(index) {
    if (index < 0 || index >= this._size) {
      throw RangeError(`Index ${index} out of range`);
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      const prev = this.getNode(index - 1);
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this._size--;
    return removedNode.data;
  }

  removeFirst() {
    return this.remove(0);
  }

  removeLast() {
    return this.remove(this._size - 1);
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  // ========================
  // === NODE-LEVEL API ===
  // ========================

  getNode(index) {
    if (index < 0 || index >= this._size) return null;
    let current = this.head;
    let i = 0;
    while (current && i < index) {
      current = current.next;
      i++;
    }
    return current;
  }

  getFirstNode() {
    return this.head;
  }

  getLastNode() {
    return this.getNode(this._size - 1);
  }

  getNextNode(node) {
    return node ? node.next : null;
  }

  getPreviousNode(node) {
    if (!this.head || this.head === node) return null;
    let current = this.head;
    while (current && current.next !== node) {
      current = current.next;
    }
    return current;
  }

  insertBefore(targetNode, data) {
    if (!targetNode) return;

    const newNode = this._createNode(data);

    if (targetNode === this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const prev = this.getPreviousNode(targetNode);
      if (!prev) return;
      newNode.next = targetNode;
      prev.next = newNode;
    }

    this._size++;
  }

  insertAfter(targetNode, data) {
    if (!targetNode) return;
    const newNode = this._createNode(data, targetNode.next);
    targetNode.next = newNode;
    this._size++;
  }

  removeNode(targetNode) {
    if (!targetNode || !this.head) return null;

    if (targetNode === this.head) {
      this.head = this.head.next;
    } else {
      const prev = this.getPreviousNode(targetNode);
      if (!prev) return null;
      prev.next = targetNode.next;
    }

    this._size--;
    return targetNode.data;
  }
}
