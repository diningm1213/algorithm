function solution(arr) {
    let ans = 0;
    
    while(true) {
        const newArr = arr.map(v => {
            if (v >= 50 && v % 2 === 0) {
                return v / 2;
            } else if (v < 50 && v % 2 === 1) {
                return v * 2 + 1;
            }
            return v;
        });
        
        if (arr.every((v, i) => v === newArr[i])) {
            break;
        }
        ans++;
        arr = newArr;
    }   
    
    return ans;
}