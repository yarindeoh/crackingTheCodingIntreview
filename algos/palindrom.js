function isPalindromeRecursive(str) {
    const len = str.length;
    if (len === 0 || len === 1) {
        return true;
    }
    return str[0] === str[len - 1] && isPalindromeRecursive(str.slice(1, len - 1))
}