function solution(my_string) {
    const set = new Set();
    
    return [...my_string].filter(c => {
        if (!set.has(c)) {
            set.add(c);
            return true;
        }
        return false;
    }).join('');
}