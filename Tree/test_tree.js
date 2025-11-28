import Tree from "./tree.js";

let tree = new Tree();

tree.root.value = "root";

const a = "A";
const b = "B";
const a1 = "A1";
const a2 = "A2";
const b1 = "B1";

// add children to the root
tree.addValue(a);
tree.addValue(b);

// get references to the newly added nodes
const aNode = tree.root.childNodes[0];
const bNode = tree.root.childNodes[1];

// add children to A
tree.addValue(a1, aNode);
tree.addValue(a2, aNode);

// add child to B
tree.addValue(b1, bNode);

// print the whole tree
console.log("\n");
tree.printTree();

// pretty print
console.log("\n");
tree.prettyPrint();

// find a value
console.log("\nFind Value A2");
console.log(tree.findValue("A2"));

// find a missing value
console.log("\nFind Value 'missing'");
console.log(tree.findValue("missing"));
