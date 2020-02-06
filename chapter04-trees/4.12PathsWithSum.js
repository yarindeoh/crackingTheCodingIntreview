function findPathsWithSumNode(node, current, value) {
    console.log(node.value);
    if(node === null) {
        return 0;
    }
    let totalPaths = 0;
    current = current + node.value;
    if(current === value) {
        totalPaths += 1;
    }
    totalPaths += findPathsWithSumNode(node.right, current, value);
    totalPaths += findPathsWithSumNode(node.left, current, value);

    return totalPaths;
}

function findPathsWithSum(node, sum) {
    if(node === null) {
        return 0;
    }
    let pathsFromRoot = findPathsWithSumNode(node, 0, sum);

    let countPathsRight = findPathsWithSum(node.right, sum);
    let countPathsLeft = findPathsWithSum(node.left, sum); 

    return pathsFromRoot + countPathsLeft + countPathsRight;
}

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

findPathsWithSumFromNode(t1, 7); //2