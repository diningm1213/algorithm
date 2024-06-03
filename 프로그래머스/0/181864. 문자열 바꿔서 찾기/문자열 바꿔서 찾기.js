function solution(myString, pat) {
    return myString.includes([...pat].map(c => c === 'A' ? 'B' : 'A').join('')) ? 1 : 0;
}