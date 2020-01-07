const Node = require('./Node');

module.exports = function add(head, element){
    let node = new Node(element);
    if(head === null){
        head = node;
    } else {
        let currentNode = head;
        while(currentNode.next){
            currentNode  = currentNode.next;
        }
        currentNode.next = node;
    }
};