function solution(s, skip, index) {
    const alphabets = [];
    for (let i = 0; i < 26; i++) {
        const c = String.fromCharCode('a'.charCodeAt() + i);
        if (!skip.includes(c)) {
            alphabets.push(c);
        }
    }
    const len = alphabets.length;
    return [...s].map(c => {
        let i = alphabets.indexOf(c);
        return alphabets[(i + index) % len];
    }).join('');
}