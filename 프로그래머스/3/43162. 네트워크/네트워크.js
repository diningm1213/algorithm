function solution(n, computers) {
    let ans = 0;
    const checkList = Array(n).fill(false);
    
    const dfs = (i) => {
        computers[i].forEach((v, j) => {
            if (v && !checkList[j]) {
                checkList[j] = true;
                dfs(j);
            }
        })
    }
    
    computers.forEach((computer, i) => {
        if (!checkList[i]) {
            ans++;
            
            dfs(i);
        }
    });
    
    return ans;
}