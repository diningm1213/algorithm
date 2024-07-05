function solution(num_list, n) {
    const ans = [];
    while (num_list.length) {
        ans.push(num_list.splice(0, n));
    }
    
    return ans;
}