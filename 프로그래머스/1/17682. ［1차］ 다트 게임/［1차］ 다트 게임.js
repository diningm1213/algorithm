function solution(dartResult) {
    let ans = [];
    let j = 0;

    [...dartResult].forEach((c, i) => {
        if (/\d/.test(c)) {
            ans[j] = ans[j] ? ans[j] + c : c
        } else {
            switch (c) {
                case 'S':
                    ans[j] **= 1;
                    break;
                case 'D':
                    ans[j] **= 2;
                    break;
                case 'T':
                    ans[j] **= 3;
                    break;
                case '*':
                    ans[j] *= 2;
                    if (j - 1 >= 0) {
                        ans[j - 1] *= 2;
                    }
                    break;
                case '#':
                    ans[j] = -ans[j];
                    break;
            }
            if (/\d/.test(dartResult[i + 1])) {
                j++;
            }
        } 
    });
    
    return ans.reduce((acc, cur) => acc + cur, 0);
}