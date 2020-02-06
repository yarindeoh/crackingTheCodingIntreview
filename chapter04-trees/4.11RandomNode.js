let TreeNode = function(value) { 
    this.value = value;
    this.left = null;
    this.right = null;
    this.size = 0; 
}

function insert(node, num) {
    if(node.value <= num) {
        if(!node.left) {
            node.left = new TreeNode(num);
        } else {
            insert(node.left, num);
        }
    } else {
        if(!node.right) {
            node.right = new TreeNode(num);
        } else {
            insert(node.right, num);
        }
    }
    node.size ++;
}

/**
 * Saving size of each tree node allow us to know which node branch is bigger
 * which affects the random chances - if left side is bigger send more to the left
 * and randomly send a call to each side
 * @param {TreeNode} node 
 */
function getNodeFromIndex(node) {
    let leftSize = (node && node.left) ? node.left.size : 0;
    let index = node ? Math.round(Math.random() * node.size) : 0;

    if(index < leftSize && node.left) {
        return getNodeFromIndex(node.left);
    } else if(index > leftSize && node.right){
        return getNodeFromIndex(node.right);
    } else {
        return node.value;
    }
}

let t1 = new TreeNode(1);
insert(t1, 2);
insert(t1, 3);
insert(t1, 4);
insert(t1, 5);
insert(t1, 6);
insert(t1, 7);
insert(t1, 8);

getNodeFromIndex(t1);
