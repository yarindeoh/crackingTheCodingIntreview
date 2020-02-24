let origin = [];
let dest = [];
let buffer = [];

function move(n1, n2) {
    n2.push(n1.pop());
}

function hanoiTower(n, a, b) {
    if(n > 0) { 
        //move n to bugger;
        hanoiTower(n - 1, buffer, dest);
        move(origin, dest);
        //move n to dest;
        hanoiTower(n - 1, dest, origin);
    }
   
} 

