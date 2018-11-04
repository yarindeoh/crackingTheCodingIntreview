module.exports = function(head) {
    let node = head;
    console.log('start of linked list');
    while (node !== null) {
        console.log(node.element);
        node = node.next;
    }
    console.log('end of linked list');
};