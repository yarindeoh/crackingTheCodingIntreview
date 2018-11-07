const BST = require('./BST');
const Queue = require('./Queue');


/**
 * Breadth first level 1 order with queue
 * @param num
 */
const pushOrderNodes = (num) => {
    let levelOrderArray = [];
    levelOrderArray.push(num);
    console.log(levelOrderArray);
};

 function traverseBreadthFirst(func, tree) {
    let queue = new Queue();
    queue.enqueue(tree);
    while (queue.items.length) {
        let currentNode = queue.dequeue();
        if (currentNode.left) {
            queue.enqueue(currentNode.left)
        }

        if (currentNode.right) {
            queue.enqueue(currentNode.right)
        }

        func(currentNode.data)
    }
}



let t1 = new BST(3);
t1.addToBinaryTree(4);
t1.addToBinaryTree(1);
t1.addToBinaryTree(80);
t1.addToBinaryTree(-20);
t1.addToBinaryTree(2);
// console.log(t1);

traverseBreadthFirst(pushOrderNodes, t1);

