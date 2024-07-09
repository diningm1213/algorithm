function solution(arr) {
    const len = arr.length;
    let squared = 1;
    
    while (squared < len) {
        squared *= 2;
    }
    
    arr.push(...Array(squared - len).fill(0))
    
    return arr;
}