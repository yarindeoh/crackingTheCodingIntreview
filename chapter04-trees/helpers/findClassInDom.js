
let Node = function(value) {
    this.children = [];
    this.value = value;
};

function findClassInDom(node, value, nodes) {
    if(!node.children.length) {
        if(node.value !== value) {
            return;
        } else {
            nodes.push(node);
        }
    }
    else if(node.value === value) {
        nodes.push(node);
    } else {
        for(let i = 0; i < node.children.length; i ++) {
            findClassInDom(node.children[i], value, nodes);
        }
    }
    return nodes;
}

function find(node, value) {
    let nodes = [];
    console.log(findClassInDom(node, value, nodes));
}

let n1 = new Node(3);
let n2 = new Node(5);
let n3 = new Node(1);
let n4 = new Node(7);
let n5 = new Node(8);
let n6 = new Node(8);
let n7 = new Node(8);
let n8 = new Node(1);
n2.children.push(n4);
n2.children.push(n5);
n2.children.push(n6);
n2.children.push(n7);
n7.children.push(n8);
n1.children.push(n2);
n1.children.push(n3);
// console.log(n1);

console.log(find(n1, 8));