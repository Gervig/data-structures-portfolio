export default class Stack {
  // Last in, First out (LIFO)
  //TODO: maybe you start with a fixed size?
  constructor() {
    this.head = null;
    this._size = 0;
  }

  // add element to stack
  push(data) {
    // create a new node with with the data
    const node = this._createNode(data);
    // first set the node's next as head
    node.next = this.head;
    // then assign the new node as the head
    // the order is important!
    this.head = node;
    // size goes up
    this._size++;
    return this.head;
  }

  // remove the last added element from the stack
  pop() {
    // saves the element that is about to be popped
    const popped = this.head;
    // pops the head
    this.head = this.head.next;
    // returns the popped
    return popped;
  }

  // look at the top element (last added element) of the stack
  //TODO: could use an index parameter to peek through the stack
  peek() {
    return this.head.data;
  }

  // we only need a reference to the head
  // the head is the top of the stack, yes it's sort of reverse...
  head() {
    return this.head;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return !this.head;
  }

  // Helper method to create a new node
  _createNode(data, next = null, prev = null) {
    return { data, next, prev };
  }

  //TODO: only makes sense if a stack has a fixed size
  isFull() {}
}
