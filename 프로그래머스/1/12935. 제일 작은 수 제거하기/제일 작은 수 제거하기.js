function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    }
    const min = Math.min(...arr);
    const i = arr.indexOf(min);
    arr.splice(i, 1);
    
    return arr;
}