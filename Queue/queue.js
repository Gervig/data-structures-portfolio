// import DoublyLinkedList from "../Doubly Linked List/doublylinkedlist";

export default class Queue {
  // First in, first out (FIFO)
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  enqueue(data) {
    // this.addLast(data);
    // return this.tail();

    const newNode = this._createNode(data);

    // if the list doesn't have a tail, sets new node as tail and head
    if (!this.tail && !this.head) {
      this.tail = newNode;
      this.head = newNode;
      // sets the tail's next as new node
      // sets new node's prev as the old tail
      // finally overwrites the tail variable as the new node
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    // size of list goes up
    this._size++;
  }

  dequeue() {
    // const node = this.head();
    // this.list.removeFirst();
    // return node;

    return this.remove(0);
  }

  peek() {
    return this.head().data;
  }

  size() {
    return this._size;
  }

  get(index) {
    // return this.list.get(index);

    // finds the node at the index
    const node = this.getNode(index);
    // if it's not null, returns its data
    if (node != null) {
      return node.data;
    } else {
      // if it's null, return undefined
      return undefined;
    }
  }
}
