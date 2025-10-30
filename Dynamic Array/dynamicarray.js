import StaticArray from "./StaticArray.js";

export class DynamicArray {
  #size;
  #capacity;

  constructor(capacity) {
    this.#size;
    this.#capacity = capacity;
  }

  //TODO: shouldn't this be setting size and then we can just return it?
  size(){
    let count = 0;
    for(i of this){
      if(i) count++;
    }
    return count;
  }
}
