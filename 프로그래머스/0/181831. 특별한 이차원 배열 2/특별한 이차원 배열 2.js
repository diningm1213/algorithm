function solution(arr) {
    const n = arr[0].length
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
            if (arr[y][x] !== arr[x][y]) {
                return 0;
            }
        }
    }
    
    return 1;
}