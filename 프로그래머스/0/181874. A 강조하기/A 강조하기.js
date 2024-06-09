function solution(myString) {
    return [...myString].map(c => c === 'A' || c === 'a'  ? 'A' : c.toLowerCase()).join('');
}