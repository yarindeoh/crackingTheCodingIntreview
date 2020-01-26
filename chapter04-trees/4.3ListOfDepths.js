const Tree = require('./helpers/Tree');

function printByLevelDictionary(n, level, dic) {
    if(!n.right && !n.left) {
       return;
    } else {
       level += 1;
       if(!(level in dic)) {
         dic[level] = [];
       }
       if(n.right && n.left) {  
           dic[level].push(n.right.value);
           dic[level].push(n.left.value);
           printByLevel(n.left, level, dic);
           printByLevel(n.right, level, dic);
       } else if(!n.right) {
           dic[level].push(n.left.value);
           printByLevel(n.left, level, dic);
       } else if(!n.left){
           dic[level].push(n.right.value);
           printByLevel(n.right, level, dic);
       }
   }
   return dic;
}

function listOfDepths(node) {
    let level = 1;
    let dictionary = {};
    console.log(node.value);
    dictionary[level] = [node.value];
    return printByLevelDictionary(node, level, dictionary);
}


let n1 = new Tree(1);
let n2 = new Tree(2);
let n3 = new Tree(3);
let n4 = new Tree(4);
let n5 = new Tree(5);
let n6 = new Tree(6);
let n7 = new Tree(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n6;
n6.right = n7;

listOfDepths(n1);