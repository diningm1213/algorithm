function solution(X, Y) {
    let ans;
    const numbers = [];
    const mapX = new Map();
    
    [...X].forEach(x => {
        mapX.set(x, (mapX.get(x) || 0) + 1);
    });
    
    [...Y].forEach(y => {
        if (mapX.has(y)) {
            const getCount = mapX.get(y);
            getCount === 1 ? mapX.delete(y) : mapX.set(y, getCount - 1);
            numbers.push(y);
        }
    });
    
    ans = numbers.length ? numbers.sort((a, b) => b - a).join('') : "-1";
    
    return ans == 0 ? "0" : ans;
}