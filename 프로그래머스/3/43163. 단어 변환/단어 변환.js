function solution(begin, target, words) {
    const len = begin.length;
    let ans = 100;
    
    const dfs = (word, count, remainWords) => {
        if (word === target) {
            if (ans > count) {
                ans = count;
            }
            return;
        }
        if (count === words.length) {
            return;
        }
        
        remainWords.forEach((remainWord, i) => {
            let diff = 0;
            for (let i = 0; i < len; i++) {
                if (word[i] !== remainWord[i]) {
                    diff++;
                }
            }
            if (diff === 1) {
                const newWords = [...remainWords];
                newWords.splice(i, 1);
                dfs(remainWord, count + 1, newWords);
            }
        });
    }
    
    dfs(begin, 0, words);
    
    return ans === 100 ? 0 : ans;
}