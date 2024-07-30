function solution(arr) {
    const ans = arr.reduce((acc, cur) => {
        acc.length && acc.at(-1) === cur ? acc.pop() : acc.push(cur);
        return acc;
    }, []);
    
    return ans.length ? ans : [-1];
}