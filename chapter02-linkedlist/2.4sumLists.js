const Node = require('./helpers/Node');
const PrintList = require('./helpers/PrintList');
const Add = require('./helpers/Add');

/**
 * Time complexity o(a + b) and another list
 * @param node1
 * @param node2
 * @param carry
 * @returns {null|module.exports}
 */
function sumOfLists(node1, node2, carry = 0){
    if(!node1 && !node2 && carry === 0){
        return null
    }
    let value = carry;
    if(node1 && node1.element) {
        value += node1.element;
    }
    if(node2 && node2.element) {
        value += node2.element;
    }
    node1 = node1.next;
    node2 = node2.next;
    const sumList  = new Node(value % 10);

    //recursive call
    sumList.next = sumOfLists(node1, node2, value >= 10 ? 1 : 0);

    return sumList;
}

const n1 = new Node(7);
const n2 = new Node(1);
const n3 = new Node(6);

n1.next = n2;
n2.next = n3;

const n4 = new Node(5);
const n5 = new Node(9);
const n6 = new Node(2);

n4.next = n5;
n5.next = n6;

// PrintList(n1);
// PrintList(n4);
// console.log('after sum =>>>>');
//
// const sum = sumOfLists(n1, n4);
// PrintList(sum);

function numFromList(list) {
    let res = 0;
    let count = 1;
    while(list !== null) {
        res += count * list.element;
        count = count * 10;
        list = list.next;
    }
    return res;
}

function convertNumToList(num) {
    let length = num.toString().length;
    let str = num.toString().split("");
    let list = new Node();
    while(length) {
        Add(list, str[length - 1]);
        length --;
    }
    return list;
}

/**
 * Time complexity of o(a + b) of 2 lists
 * but space complexity of another list and params.
 * @param l1
 * @param l2
 * @returns {module.exports}
 */
function sumOfListV2(l1, l2) {
    let s1 = numFromList(l1);
    let s2 = numFromList(l2);
    let s3 = s1 + s2;
    return convertNumToList(s3);
}

PrintList(sumOfListV2(n1, n4));