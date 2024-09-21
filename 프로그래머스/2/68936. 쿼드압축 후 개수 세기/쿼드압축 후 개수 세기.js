function solution(arr) {
    let size = arr.length;
    let divider = 1;
    const getNumCount = (x, y, len) => {
        const counts = [0, 0];
        
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                const index = arr[y + i][x + j];
                if (index === -1) {
                    return [-1, -1];
                }
                counts[index]++;
            }
        }
        
        return counts;
    }
    const clearArr = (x, y, len) => {
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                arr[y + i][x + j] = -1;
            }
        }
    }
    const ans = getNumCount(0, 0, size);
    
    while (size > 1) {
        for (let i = 0; i < divider; i++) {
            for (let j = 0; j < divider; j++) {
                const y = i * size;
                const x = j * size;
                
                const [zero, one] = getNumCount(y, x, size);
                if (zero && !one) {
                    ans[0] -= zero - 1;
                    clearArr(y, x, size);
                } else if (one && !zero) {
                    ans[1] -= one - 1;
                    clearArr(y, x, size);
                }
            }
        }
        
        divider *= 2;
        size /= 2;
    }
    
    return ans;
}