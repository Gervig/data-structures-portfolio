import StaticArray from "../StaticArray/StaticArray";

export class DynamicArray {
  #arr;
  #size;
  #capacity;

  constructor(capacity) {
    this.#size;
    this.#capacity = capacity;
    this.#arr = new StaticArray(capacity);
  }

  //TODO: shouldn't this be setting size and then we can just return it?
  size() {
    let count = 0;
    for (i of this) {
      if (i) count++;
    }
    this.#size = count;
    return this.#size;
  }

  get(index){}

  insert(index, value){}

  remove(index){}

  set(index, value){}

  clear(){}

  // this should private, you shouldn't be able to call this from the outside
  #grow(){}

  // same for this, should be private
  #shrinking(){}
}
