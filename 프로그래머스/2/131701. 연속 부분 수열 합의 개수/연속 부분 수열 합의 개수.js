function solution(elements) {
    const set = new Set();
    const dElements = [...elements, ...elements];
    
    elements.forEach((_, i) => {
        for (let count = 0, maxCount = elements.length; count < maxCount; count++) {
            let start = i;
            let end = i + count;
            
            set.add(dElements.slice(start, end + 1).reduce((acc, cur) => acc + cur, 0));
        }
    });
    
    return set.size;
}