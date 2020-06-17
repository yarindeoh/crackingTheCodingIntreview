 
//            1                                 1
//          /   \                             /   \
//        1      0            =====>         1     1
//       / \    / \                         / \   / \
//      1   1  1   1                       1   1 1   1
    
//     Input: Leaf 
//     1. Swap
//     2. Fix
//     The parent node value is always children value's LOGICAL AND
 


// {val, right, left, parent}

let Node = function(value) {
    this.val = value;
    this.left = null;
    this.right = null;
};

function fixTree(node) {
  if(!node.parent) {
    return;
  } else {
    node.parent = node.parent.right.val && node.parent.left.val;
    swapNodeTree(node.parent);
  }
}

function swapNodeTree(node) {
    let node.val = !node.val;
    fixTree(node);
}

let n1 = new Node(1);
swapNodeTree(n1);