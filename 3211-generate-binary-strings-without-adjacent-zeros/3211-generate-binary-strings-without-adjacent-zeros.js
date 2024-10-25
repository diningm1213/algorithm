/**
 * @param {number} n
 * @return {string[]}
 */
 
var validStrings = function(n) {
    let arr = ['0', '1'];
    
    for (let i = 1; i < n; i++) {
        const newArr = [];
        arr.forEach(v => {
            if (v.at(-1) === '0') {
                newArr.push(v + '1');
            } else {
                newArr.push(v + '0');
                newArr.push(v + '1');
            }
        });

        arr = newArr;
    }

    return arr;
};