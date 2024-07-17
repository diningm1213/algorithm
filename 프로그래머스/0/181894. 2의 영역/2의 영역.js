function solution(arr) {
    const ans = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
    return ans.length ? ans : [-1]; 
}