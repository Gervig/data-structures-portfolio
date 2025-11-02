import StaticArray from "../StaticArray/StaticArray";

export default class SinglyLinkedList {
  #nodes;
  #head;

  constructor() {
    this.#nodes = [];
    this.#head = null;
  }

  printList() {
    for (node of this.#nodes) {
      console.log(`${node}`);
    }
  }

  add(data) {
    const node = { data: "A" };
    data.next = node;
    this.#nodes.add(data);
  }

  get(index) {
    let i = 0;
    for (node of this.#nodes) {
      if (i == index) {
        return node;
      }
      i++;
    }
  }

  getFirst() {
    return this.#head;
  }

  getLast() {
    for (node of this.#nodes) {
      if (node.next == null) return node;
    }
  }

  set(index, data) {}

  insert(index, data) {}

  remove(index) {}

  removeFirst() {}

  removeLast() {}

  size() {}

  clear() {}

  getNode(index) {}

  getFirstNode() {}

  getLastNode() {}

  getNextNode(node) {}

  getPreviousNode(node) {}

  insertBefore(node, data) {}

  insertAfter(node, data) {}

  removeNode(node) {}
}
