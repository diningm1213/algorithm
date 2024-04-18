function solution(n, m, section) {
    let ans = 0;
    
    while (section.length) {
        const lastSection = section[0] + m - 1;
        while(section[0] <= lastSection) {
            section.shift();
        }
        ans++;
    }
    return ans;
}