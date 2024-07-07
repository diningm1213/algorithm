function solution(myString, pat) {
    let count = 0;
    let patLen = pat.length;
    
    for (let i = 0; i <= myString.length - patLen; i++) {
        if (myString.substring(i, i + patLen) === pat) {
            count++;
        }
    }
    
    return count;
}