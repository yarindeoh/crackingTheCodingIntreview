module.exports = function(head) {
    let counter = 0;
    while(head !== null) {
        counter ++;
        head = head.next;
    }
    return counter;
};