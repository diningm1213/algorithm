function solution(arr) {
    let y = arr.length;
    let x = arr[0].length;
    
    if (y < x) {
        arr.push(...Array.from(Array(x - y), () => Array(x).fill(0)));
    } else {
        arr.forEach(row => {
            row.push(...Array(y - x).fill(0)); 
        });
    }
    
    return arr;
}