/**
 * @param {string[]} strs
 * @return {string}
 */

// For
const longestCommonPrefixLoop = function (strs) {
    const firstWord = strs[0];
    let common = '';

    for (let i = 0; i < firstWord.length || firstWord != common; i++) {
        if (!strs.every(s => s.startsWith(firstWord.substring(0, i)))) {
            return common;
        };
        common = firstWord.substring(0, i);
    }
    return common;
};

// While
const longestCommonPrefix = function (strs) {
    const firstWord = strs[0];
    let common = '',
        i = 1;

    while (true) {
        if (common == firstWord || !strs.every(s => s.startsWith(firstWord.substring(0, i)))) break 
        common = firstWord.substring(0, i);
        i++;
    }
    return common;
};