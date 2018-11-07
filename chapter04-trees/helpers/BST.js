function BST(data) {
    this.data = data;
    this.right = null;
    this.left = null;
}

BST.prototype.addToBinaryTree = function(element) {
    if (element < this.data) {
        if (this.left === null) {
            this.left = new BST(element);
        } else {
            this.left.addToBinaryTree(element);
        }
    } else if(element > this.data){
        if (this.right === null) {
            this.right = new BST(element);
        } else {
            this.right.addToBinaryTree(element);
        }
    }
};


// let t1 = new BST(3);
// t1.addToBinaryTree(4);
// t1.addToBinaryTree(1);
// t1.addToBinaryTree(80);
// t1.addToBinaryTree(-20);
// t1.addToBinaryTree(2);
// t1.addToBinaryTree(82);
// t1.addToBinaryTree(-30);
// console.log(t1);

module.exports = BST;
