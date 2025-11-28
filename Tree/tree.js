export default class Tree {
  constructor() {
    this.root = new Tree.Node();
  }

  printTree(node = this.root) {
    // print the node, starts at root if no other node is given
    console.log({
      value: node.value,
      children: node.childNodes.length,
    });

    // recursively print all child nodes and their childs and so on...
    for (const child of node.childNodes) {
      this.printTree(child);
    }
  }

  prettyPrint(node = this.root, prefix = "", isLast = true) {
    // Print current node
    const connector = prefix === "" ? "" : isLast ? "└── " : "├── ";
    console.log(prefix + connector + node.value);

    // Prepare prefix for children
    const childPrefix = prefix + (isLast ? "    " : "│   ");

    // Recurse children
    node.childNodes.forEach((child, index) => {
      const last = index === node.childNodes.length - 1;
      this.prettyPrint(child, childPrefix, last);
    });
  }

  addValue(value, parentNode = this.root) {
    // create a new node
    const node = new Tree.Node(null, [], value);

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
      const result = this.findValue(value, child);
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
      return this.childNodes.length > 0;
    }

    appendChild(child) {
      this.childNodes.push(child);
    }

    removeChild(child) {
      const index = this.childNodes.indexOf(child);
      if (index === -1) return this.nodeNotFound(child);
      return this.childNodes.splice(index, 1)[0];
      //TODO: handle children of removed child
    }

    replaceChild(newChild, oldChild) {
      const index = this.childNodes.indexOf(oldChild);
      if (index === -1) return this.nodeNotFound(oldChild);
      this.childNodes[index] = newChild;
      return newChild;
      //TODO: handle children of replaced child
    }

    nodeNotFound(node) {
      console.log(`Could not find ${JSON.stringify(node)} node`);
    }
  };
}
