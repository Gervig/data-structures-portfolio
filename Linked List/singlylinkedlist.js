export default class SinglyLinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  // Helper method to create a new node
  _createNode(data, next = null) {
    return { data, next };
  }

  printList() {
    // start at the head
    let current = this.head;
    let index = 0;
    // if there is a node at head, runs while loop
    while (current) {
      // prints the index & and data for current node
      // and an arrow if it has a next, if not prints null
      console.log(
        `[${index}] data: ${JSON.stringify(current.data)}, next: ${
          current.next ? "→" : "null"
        }`
      );
      // moves to next node, exits if it's null
      current = current.next;
      index++;
    }
    // prints for empty list
    if (this._size === 0) console.log("(empty list)");
  }

  add(data) {
    // create new node with data from argument
    const newNode = this._createNode(data);
    // if list doesn't have a head, sets new node as head
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      // loops through nodes from the head until it finds the tail
      // and sets new node as the tail's next
      while (current.next) current = current.next;
      current.next = newNode;
    }
    // finally increases size of list
    this._size++;
  }

  get(index) {
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

  getFirst() {
    return this.head ? this.head.data : null;
  }

  getLast() {
    const lastNode = this.getLastNode();
    return lastNode ? lastNode.data : null;
  }

  set(index, data) {
    // finds node at index
    const node = this.getNode(index);
    // checks if there was a node at that index
    if (!node) throw RangeError(`Index ${index} out of range`);
    // overwrites the node at the index with data from argument
    node.data = data;
  }

  insert(index, data) {
    // checks for valid index
    if (index < 0 || index > this._size) {
      throw RangeError(`Index ${index} out of range`);
    }

    // create new node with data from argument
    const newNode = this._createNode(data);

    // if the index is the head, sets new node's next as the head
    // and sets head variable to the new node, it is the new head node
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // finds the node before the insertion (prev)
      const prev = this.getNode(index - 1);
      // sets the new nodes' next as the same as prev
      newNode.next = prev.next;
      // changes prev node to the new node
      prev.next = newNode;
    }
    // size of list goes up
    this._size++;
  }

  remove(index) {
    // checks for valid index
    if (index < 0 || index >= this._size) {
      throw RangeError(`Index ${index} out of range`);
    }

    // declare a node for removal
    let removedNode;
    // if index is the head
    if (index === 0) {
      removedNode = this.head;
      // sets the head's node as the new head
      // now the old head has no next, 
      // it's not linked and therefore 'removed' from the list
      this.head = this.head.next;
    } else {
      // finds the node before the 'deletion'
      const prev = this.getNode(index - 1);
      // sets removal node as the prev's next
      removedNode = prev.next;
      // sets the prev's next as the removed node's next
      prev.next = removedNode.next;
      // the removed node still has a next,
      // but no other node has a next that points to it
      // we can therefor consider it 'removed'
    }

    // size of list goes down
    this._size--;
    // return the node that was 'removed'
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
    // counts nodes from the head
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  // ---- NODE LOGIC ---- //

  getNode(index) {
    // returns null if index is invalid
    if (index < 0 || index >= this._size) return null;
    let current = this.head;
    let i = 0;
    // loops through nodes from the head until index is reached or node is null
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
    // return null if there is no head or the node from argument is the head
    if (!this.head || this.head === node) return null;

    let current = this.head;
    // loop through the list until we find a node that points to the target node (node from argument)
    // or we reach the end of the list, the node which next points to our target is the previous node
    while (current && current.next !== node) {
      current = current.next;
    }
    return current;
  }

  insertBefore(targetNode, data) {
    // early return if there is no node to insert
    if (!targetNode) return;

    // creates new node with data from argument
    const newNode = this._createNode(data);

    // if the target is the head
    if (targetNode === this.head) {
      // sets new node's next as the head node
      newNode.next = this.head;
      // sets the new node as the head variable
      this.head = newNode;
    } else {
      // finds the prev node
      const prev = this.getPreviousNode(targetNode);
      // return if there is no prev node
      if (!prev) return;
      // sets new node's next as the target node
      newNode.next = targetNode;
      // sets prev node's next as the new node
      prev.next = newNode;
    }

    // size of list goes up
    this._size++;
  }

  insertAfter(targetNode, data) {
    // early return if there is no node to insert
    if (!targetNode) return;

    // creates new node with data from argument 
    // and sets its next as the target node's next
    const newNode = this._createNode(data, targetNode.next);
    // sets the target node's next as the new node
    targetNode.next = newNode;
    // size of list goes up
    this._size++;
  }

  removeNode(targetNode) {
    // early return if there is no target node
    if (!targetNode || !this.head) return null;
    // if the target is the head
    if (targetNode === this.head) {
      // sets the head variable to the head node's next
      this.head = this.head.next;
    } else {
      // finds the prev node
      const prev = this.getPreviousNode(targetNode);
      // return if there is no prev node
      if (!prev) return null;
      // sets the prev node's next to the target node's next
      prev.next = targetNode.next;
    }

    // size of list goes down
    this._size--;
    // return the node that was removed
    return targetNode.data;
  }
}
