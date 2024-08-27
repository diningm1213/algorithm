function solution(_word) {
    const ans = new Set();
    const words = ['', 'A', 'E', 'I', 'O', 'U'];
    const recursion = (word, deps) => {
        if (deps === 4) {
            ans.add(word.join(''));
            return;
        }
        
        words.forEach(w => {
            recursion([...word, w], deps + 1);
        });
    }
    
    words.forEach(w => {
        recursion([w], 0);
    })
    
    return [...ans].sort().indexOf(_word);
}