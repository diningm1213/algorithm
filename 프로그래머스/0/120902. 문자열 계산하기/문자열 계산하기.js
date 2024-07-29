function solution(my_string) {
    let ans = 0;
    let oper = '+';
    const arr = my_string.split(' ');
    arr.forEach((v, i) => {
        if (i % 2 === 0) {
            ans = oper === '+' ? ans + +v : ans - +v;
        } else {
            oper = v;
        }
    });
    
    return ans;
}