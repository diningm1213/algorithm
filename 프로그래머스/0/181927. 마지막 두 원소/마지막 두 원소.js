function solution(num_list) {
    const [n1, n2] = num_list.slice(-2);
    
    return [...num_list, ...(n1 < n2 ? [n2 - n1] : [n2 * 2])];
}