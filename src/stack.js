const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  constructor(element) {
    this.element = [];
  }

  push(el) {
  //  this.element.push(el);
  this.element[this.element.length] = el;
  //console.log(this.element);
  }

  pop() {
    if (this.element === []) return undefined;
  //  this.element.pop();

    let last = this.element[this.element.length - 1];
    this.element.length  = this.element.length -1;

    //console.log(last);
    //console.log(this.element);
    return last;
  }

  peek() {
    //console.log(this.element[this.element.length - 1]);
    return this.element[this.element.length - 1];
  }
}

module.exports = {
  Stack
};
