export default class Tree {
  constructor() {
    this.root;
  }

  printTree() {
    
  }

  addValue(value) {
  }

  findValue(value) {
  }

  removeValue(value) {
  }

  // --------------------- //
  // ---- NODE LOGIC ----- //
  // --------------------- //

  static Node = class {
    constructor(parent = null, childNodes = [], value = null) {
      this.parent = parent;
      this.childNodes = childNodes;
      this.value = value;
    }

    firstChild() {
      return this.childNodes[0];
    }

    lastChild() {
      return this.childNodes[1];
    }

    hasChildNodes() {
      //TODO: js doesn't have an isEmpty method?
      // This is not good enough, what if the child nodes are null?
      return this.childNodes.length == 0;
    }

    appendChild(child) {
      this.childNodes.push(child);
    }

    removeChild(child){
        //TODO: use filtering
    }

    replaceChild(newChild, odlChild){

    }

  };
}
