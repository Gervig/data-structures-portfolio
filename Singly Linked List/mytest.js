import SinglyLinkedList from "./singlylinkedlist.js";

let list = new SinglyLinkedList();

const data1 = { data: "X" };
const data2 = { data: "Y" };
const data3 = { data: "Z" };

list.add(data1);
list.add(data2);

list.printList();
