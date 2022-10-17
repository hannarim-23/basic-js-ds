const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
/*
 function function removeKFromList(l, k){

  let list = l;

  while(list){
    const node = list.next;
    
    if (list.value === k){
      list.value = node.value;
      list.next = node.next;
    }
    list = node;
  }
return list;
}
*/

function removeKFromList(l, k) {
  let head = l;
  let current = l;
  let prev = null;

  while (current.next){ //пока истина

    if (current.value === k){
      if (prev) {
        prev.next = current.next;
      } else {
        head = current.next;
      }
      
    } else {
      if(!prev){
        head = current;
        head.next = current.next;
      } else {
        prev.next = current;
      }
      prev = current;
    }
    
    current = current.next; //постоянная ссылка на след
  }
  
  if (current.value === k){ //проверка последнего, кот ссылается на null
    prev.next = null;
  }

  return head; //вывод списка с головы
}


module.exports = {
  removeKFromList
};

