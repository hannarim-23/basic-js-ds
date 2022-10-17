const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootQ = null;
  }

  root() {
    return  this.rootQ;
  }


add(data) {
  function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
    this.rootQ = addWithin(this.rootQ, data);
  }
  

  has(data) {
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      if (data < node.data){
        return  searchWithin(node.left, data);
        
       } else {
        return  searchWithin(node.right, data);
       }
    }
      return searchWithin(this.rootQ, data);
  }


  find(data) {
    function search(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
       return search(node.left, data);
      } 
      if (data > node.data) {
        return search(node.right, data);
      } else {
      return node;
      }
    }
    return search(this.rootQ, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }

        if (!node.left) {
          // set right child instead of item
          node = node.right;
          return node;
        }

        if (!node.right) {
          // set left child instead of item
          node = node.left;
          return node;
        }

        // both children exists for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
    this.root = removeNode(this.rootQ, data);
  }

  min() {
    if (!this.rootQ) {
      return null;
    }

    let node = this.rootQ;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootQ) {
      return null;
    }

    let node = this.rootQ;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};