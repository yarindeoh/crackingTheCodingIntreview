const Tree = require('./helpers/Tree');

function validateBST(n, flags = []) {
    if(!n.right && !n.left) {
        return;
    } 
    else if(n.right && n.left) {
      let cond = (n.left.value < n.value) && (n.value < n.right.value);
         if(cond) {
            validateBST(n.left, flags);
            validateBST(n.right, flags);
        } 
        flags.push(cond);  
    } else {
        // Check condition if subtree has only right or only left
        let cond = !n.left ? (n.value < n.right.value) : (n.left.value < n.value);
        if(cond) {
            validateBST(n.right, flags);
        } 
        flags.push(cond);
    }
    return flags;
}

/**
 * Checking each subtree if n.left < n.root < n.right 
 * to validate if it's BST, complexity of o(n) and also space complexity of o(logn);
 *  *** this tree is not checking for min or max
 * @param {Tree} node 
 */
function checkIsBST(node) {
    let result = validateBST(node);
    return result.reduce((item, value) => {
        return value && acc;
    }, acc = true);
}

let t1 = new Tree(1);
let t2 = new Tree(2);
let t3 = new Tree(3);
let t4 = new Tree(4);
let t5 = new Tree(5);
let t6 = new Tree(6);

t4.right = t5;
t4.left = t2;
t5.right = t6;
t2.right = t3;
t2.left = t1;

checkIsBST(t4);

/**
 * Shorter version of recursive solution -> send always relative min and max->
 * if you are sending left tree, root is the max and sending right tree root is the min
 * Time complexity is the same and 2 primitive params instead of arr
 * @param {Tree} n 
 * @param {*} min 
 * @param {*} max 
 */
function checkBSTminmax(n, min, max) {
    if(n === null) return true;
    if((min !== null  && n.value <= min) || (max !== null && n.value > max)) {    
        return false; 
    }
    if(!checkBSTminmax(n.left, min, n.value) || !checkBSTminmax(n.right, n.value, max)) {    
        return false;
    }
    return true;
}

// checkBSTminmax(t4, null, null);
