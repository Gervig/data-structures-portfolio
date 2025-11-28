export default class Tree {
  constructor() {
    this.root = new Node();
  }

  printTree(node = this.root) {
    console.log(`${JSON.stringify(node)}`);

    for (const child of node.childNodes) {
      this.printTree(child);
    }
  }

  addValue(value, parentNode = this.root) {
    // create a new node
    const node = new Node({
      parent: null,
      childNodes: [],
      value: value,
    });

    // if we don't have a root, we create a new node and make that the root
    if (!this.root.value || !this.root) {
      this.root = node;
      return;
    }

    // add the child
    parentNode.appendChild(node);
    // add the parent
    node.parent = this.root;
  }

  findValue(value, node = this.root) {
    if (node.value == value) return node;

    for (const child of node.childNodes) {
      const result = this.findValue(child.value);
      if (result) return result;
    }
    return null;
  }

  removeValue(value) {
    const node = this.findValue(value);
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
      if (!this.hasChildNodes) return null;
      return this.childNodes[0];
    }

    lastChild() {
      if (!this.hasChildNodes()) return null;
      return this.childNodes[this.childNodes.length - 1];
    }

    hasChildNodes() {
      //TODO: This is not good enough, what if the child nodes are null?
      return !this.childNodes.length == 0;
    }

    appendChild(child) {
      this.childNodes.push(child);
    }

    removeChild(child) {
      for (const node of this.childNodes) {
        if (node === child) {
          return this.childNodes.pop(child);
        }
      }
      this.nodeNotFound(child);
      return null;
    }

    replaceChild(newChild, odlChild) {
      for (const child of this.childNodes) {
        if (child === odlChild) {
          return (odlChild = newChild);
        }
      }
      this.nodeNotFound(odlChild);
      return null;
    }

    nodeNotFound(node) {
      console.log(`Could not find ${JSON.stringify(node)} node`);
    }
  };
}
