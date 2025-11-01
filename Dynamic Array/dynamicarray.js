import StaticArray from "../StaticArray/StaticArray.js";

export default class DynamicArray {
  #arr;
  #size;
  #capacity;

  constructor(capacity = 10) {
    this.#size = 0;
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

  add(item) {
    // if the array has hit capacity, it's time to grow
    if (this.#size >= this.#capacity) this.#grow();

    this.#arr.set(this.#size, item);
    this.#size++;
  }

  get(index) {
    this.#rangeCheck(index);
    return this.#arr.get(index);
  }

  insert(index, value) {
    this.#rangeCheck(index);
    if (index < 0 || index > this.#size) this.#grow();

    for (let i = this.#size; i > index; i--) {
      this.#arr.set(i, this.#arr.get(i - 1));
    }

    this.#arr.set(index, value);
    this.#size++;
  }

  remove(index) {
    this.#rangeCheck();

    for (let i = index; i < this.#size; i++) {
      this.#arr.set(i, this.#arr.get(i + 1));
    }

    this.#arr.set(this.#size - 1, null);
    this.#size--;
  }

  set(index, value) {
    this.#rangeCheck(index);
    return this.#arr.set(index, value);
  }

  size() {
    return this.#size;
  }

  capacity() {
    return this.#capacity;
  }

  clear() {
    this.#arr = new StaticArray(this.#capacity);
    this.#size = 0;
  }

  // this should private, you shouldn't be able to call this from the outside
  #grow() {
    const newCapacity = this.#capacity * 2;
    const newArr = new StaticArray(newCapacity);

    for (let i = 0; i < this.#size; i++) {
      newArr.set(i, this.#arr.get(i));
    }
    this.#arr = newArr;
    console.log(`Array has grown from ${this.#capacity} to ${newCapacity}`);
    this.#capacity = newCapacity;
  }

  // same for this, should be private
  #shrinking() {}

  #rangeCheck(index) {
    if (index < 0 || index >= this.#size)
      throw new RangeError(`Index ${index} is out range.`);
  }
}
