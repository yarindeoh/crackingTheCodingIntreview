import { Tree } from '../chapter04-trees/helpers/Tree';
function manipulateTree() {
    let arr = [];

    var t1 = new Tree(1);
    var t2 = new Tree(2);
    var t3 = new Tree(3);
    var t4 = new Tree(4);
    var t5 = new Tree(5);
    var t6 = new Tree(6);
    var t7 = new Tree(7);
    var t8 = new Tree(8);

    t1.right = t3;
    t1.left = t2;
    t2.left = t4;
    t3.right = t5;
    t3.left = t6;
    t5.right = t8;
    t5.left = t7;

    /**
     * @param {*} node
     * return arr
     */
    function serielizeTree(node) {
        if (!node) {
            arr.push('#');
            return;
        }
        arr.push(node.value);
        serielizeTree(node.left);
        serielizeTree(node.right);
    }
    /**
     * @param {*} arr
     * return node
     */
    function deSerielizeTree(arr) {
        if (!arr) {
            return;
        }
        let val = arr.shift();
        if (val === '#') {
            return;
        }
        let node = new Tree(val);
        node.left = deSerielizeTree(arr);
        node.right = deSerielizeTree(arr);

        return node;
    }
    serielizeTree(t1);
    console.log(arr);
    let n1 = deSerielizeTree(arr);
    return n1;
}

manipulateTree();