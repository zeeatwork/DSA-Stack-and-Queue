const Queue = require("./NewQueue");

const starTrekQ = new Queue();

starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");

console.log(starTrekQ.dequeue());
const Queue = require("./Queue");

let starTrekQ = new Queue();

starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");

function peek(queue) {
  // let peek = (queue) => {
  return queue.first.value;
}

function isEmpty(queue) {
  return !queue.first;
}

function display(queue) {
  let currentNode = queue.first;
  let results = " ";
  while (currentNode !== null) {
    results += currentNode.value;
    results += " ";
    currentNode = currentNode.next;
  }
  return results;
}

starTrekQ.dequeue();
starTrekQ.dequeue();

// console.log(peek(starTrekQ));
// console.log(isEmpty(starTrekQ));
console.log(display(starTrekQ)); 
class _node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.last = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _node(data);
    if (!this.first) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.last = null;
    if (node == this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue;
