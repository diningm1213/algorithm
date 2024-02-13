/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    const partReg = new RegExp(part);
    let prevLen = 0;
    
    while(s.length !== prevLen) {
        prevLen = s.length;
        s = s.replace(partReg, '');
    }

    return s;
};