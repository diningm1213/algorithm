function solution(n, [a, b, c], num_list) {
    let ans = 0;
    switch (n) {
        case 1:
            ans = num_list.slice(0, b + 1);
            break;
        case 2:
            ans = num_list.slice(a);
            break;
        case 3:
            ans = num_list.slice(a, b + 1);
            break;
        case 4:
            ans = num_list.slice(a, b + 1).filter((_, i) => i % c === 0)
            break;
    }
    
    return ans;
}