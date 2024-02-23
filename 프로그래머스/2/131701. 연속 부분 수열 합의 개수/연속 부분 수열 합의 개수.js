function solution(elements) {
    const set = new Set();
    const dElements = [...elements, ...elements];
    const len = elements.length;
    
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = 0; j < len; j++) {
            sum += dElements[i + j];
            set.add(sum);
        }
    }
    
    return set.size;
}