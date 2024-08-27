function solution(_word) {
    const ans = new Set();
    const recursion = (word, deps) => {
        if (deps === 4) {
            ans.add(word.join(''));
            return;
        }
        
        recursion([...word, ''], deps + 1);
        recursion([...word, 'A'], deps + 1);
        recursion([...word, 'E'], deps + 1);
        recursion([...word, 'I'], deps + 1);
        recursion([...word, 'O'], deps + 1);
        recursion([...word, 'U'], deps + 1);
    }
    
    recursion(['A'], 0);
    recursion(['E'], 0);
    recursion(['I'], 0);
    recursion(['O'], 0);
    recursion(['U'], 0);
    
    return [...ans].sort().indexOf(_word) + 1;
}