/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (str) {
    const symbols =
    {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        combinations: {
            'IV': 4,
            'IX': 9,
            'XL': 40,
            'XC': 90,
            'CD': 400,
            'CM': 900
        }
    }
    let res = 0;
    str = str.split('');

    str.forEach((s, i) => {
        if (symbols.combinations[s + str[i + 1]]) {
            res += symbols.combinations[s + str[i + 1]];
            str.splice(i, 2, '');
        } else {
            res += symbols[s];
            str.splice(i, 1, '');
        }
    });
    
    return res;
};