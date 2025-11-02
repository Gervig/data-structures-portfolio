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
    if(!this.#rangeCheck(index)) {
        throw RangeError(`Could get Index ${index}, it is out of range`);
    }
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

  set(index, data) {
    if(!this.#rangeCheck(index)) {
        throw RangeError(`Could not set at Index ${index}, it is out of range`);
    }
    this.get(index) = data;
  }

  insert(index, data) {
    if(!this.#rangeCheck(index)) {
        throw RangeError(`Could not insert at Index ${index}, it is out of range`);
    }
    if(index == 0){
        data.next = this.#head;
        this.#head = data;
        this.#nodes.add(data);
        return;
    } else {
        this.get(index - 1).next = data;
        data.next = this.get(index);
        this.#nodes.add(data);
    }
  }

  remove(index) {
    if(!this.#rangeCheck(index)) {
        throw RangeError(`Could not remove at Index ${index}, it is out of range`);
    }
    let node = this.get(index);
    if(index == 0){
        if(node.next){
            this.#head = node.next;
            this.#nodes.remove(node);
            return;
        } else {
            let prevNode = this.get(index - 1);
            if(prevNode){
                prevNode.next = prevNode.next.next;
                this.#nodes.reduce(node);
                return;
            }
        }
    }

  }

  removeFirst() {}

  removeLast() {}

  size() {}

  clear() {}

  getNode(index) {
    if(!this.#rangeCheck(index)) {
        throw RangeError(`Could not get node Index ${index}, it is out of range`);
    }
  }

  getFirstNode() {}

  getLastNode() {}

  getNextNode(node) {}

  getPreviousNode(node) {}

  insertBefore(node, data) {}

  insertAfter(node, data) {}

  removeNode(node) {}

  #rangeCheck(index){
    return index >= 0;
  }
}
