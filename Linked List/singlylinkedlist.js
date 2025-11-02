import DynamicArray from "../Dynamic Array/dynamicarray";

export default class SinglyLinkedList {
  #arr;
  #node;
  #head;

  constructor() {
    this.#arr = new DynamicArray();
    // sets the head to first index if it has one, otherwise it's null
    this.#arr.size > 0 ? (this.#head = this.#arr.get(0)) : (this.#head = null);
  }

  printList() {
    for (item of this.#arr) {
      console.log(`${item}`);
    }
  }

  add(data) {}

  get(index) {}

  getFirst() {
    return this.#head;
  }

  getLast() {}

  set(index, data) {}

  insert(index, data) {}

  remove(index) {}

  removeFirst() {}

  removeLast() {}

  size() {
    return this.#arr.size();
  }

  clear() {
    this.#arr = new DynamicArray();
    this.#arr.size = 0;
  }

  getNode(index) {}

  getFirstNode() {}

  getLastNode() {}

  getNextNode(node) {}

  getPreviousNode(node) {}

  insertBefore(node, data) {}

  insertAfter(node, data) {}

  removeNode(node) {}
}
