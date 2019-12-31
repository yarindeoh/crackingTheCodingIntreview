function fib(n) {
    if(n <= 0) return 0;
    else if(n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function printFib(n) {
	for(let i = 0; i < n; i ++) {
		console.log(fib(i));
	}
}

function memoFib(n, memo = []) {
      if(n <= 0) return 0;
      else if(n == 1) return 1;
      else if(memo[n] > 0) return memo[n];
      else {
        memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
        return memo[n];
      }
}