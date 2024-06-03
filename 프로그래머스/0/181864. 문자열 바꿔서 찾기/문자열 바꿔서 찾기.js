function solution(myString, pat) {
    return Number([...myString].map(c => c === 'A' ? 'B' : 'A').join('').includes(pat));
}