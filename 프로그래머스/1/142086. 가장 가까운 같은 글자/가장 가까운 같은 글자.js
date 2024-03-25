function solution(s) {
    let substring = '';
    
    return [...s].map((c, i) => {
        const index = substring.lastIndexOf(c);
        substring += c;
        return index !== -1 ? -(index - i) : index;
    });
}