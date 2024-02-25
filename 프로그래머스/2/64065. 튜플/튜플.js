function solution(s) {
    const ans = [];
    s = s.replace(/{/g, '[');
    s = s.replace(/}/g, ']');
    const arr = JSON.parse(s);
    arr.sort((a, b) => a.length - b.length);
    
    arr.forEach(elements => {
        elements.forEach(element => {
            if (!ans.includes(element)) {
                ans.push(element);
            }
        });
    });
    
    return ans;
}