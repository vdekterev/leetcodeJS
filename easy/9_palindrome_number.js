/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    reversed = `${x}`.split('').reverse().join('');
    return `${x}` == reversed;
};