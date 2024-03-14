function solution(s) {
    let ans = s;
    let count = 1;
    let temp
    for (let i = 1; i <= s.length / 2; i++) { 
        const reg = new RegExp('.'.repeat(i), 'g');
        temp = '';
        count = 1;
        const matchStr = s.match(reg);
        const remainStr = s.length % i ? s.slice(-(s.length % i)) : '';
        matchStr.forEach((substr, i) => {
            if (substr === matchStr[i + 1]) {
                count++;
            } else if (substr !== matchStr[i + 1] && count > 1) {
                temp += `${count}${substr}`;
                count = 1;
            } else {
                temp += substr;
            }
        });
        temp += remainStr;
        
        if (ans.length > temp.length) {
            ans = temp; 
        }
    }
    
    return ans.length;
}