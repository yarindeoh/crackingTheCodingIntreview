/**
 * get a, b times -> o(b)
 * @param {num} a 
 * @param {num} b 
 */
function multiple(a, b) {
    if(b === 0) {
        return 0;
    } else {
        return a + multiple(a, b - 1);
    }
}

/**
 * Count half of the s / b grid and double it
 * By dividing each iteration, complexity of o(s)
 * @param {num} smaller 
 * @param {num} bigger 
 */
function multipleRecursive(smaller, bigger) {
    if(smaller === 0) return 0;
    else if(smaller === 1) return bigger;
    
    let s = Math.round(smaller / 2);
    let halfProduct = multipleRecursive(s, bigger);
    if(smaller % 2 === 0) { // its even
        return halfProduct + halfProduct;
    } else {
        return halfProduct + halfProduct + bigger;
    }
}

var a = 8;
var b = 7;
multipleRecursive(a < b ? a : b, a < b ? b : a);
