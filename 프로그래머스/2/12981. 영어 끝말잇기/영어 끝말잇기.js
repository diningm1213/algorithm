function solution(n, words) {
    const set = new Set([words[0]]);
    let prevWord = words[0];
    
    for (let i = 1, len = words.length; i < len; i++) {
        const word = words[i];
        if (prevWord.at(-1) !== word[0] || set.has(word)) {
            return [i % n + 1, Math.ceil((i + 1) / n)];
        }
        prevWord = word;
        set.add(word);
    }
         
    return [0, 0];
}