function solution(myStr) {
    const arr = myStr.split(/a|b|c/).filter(Boolean);
    return arr.length ? arr : ['EMPTY'];
}