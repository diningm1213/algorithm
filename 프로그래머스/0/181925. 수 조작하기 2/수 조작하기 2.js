function solution(numLog) {
    const oper = new Map([
        [1, 'w'],
        [-1, 's'],
        [10, 'd'],
        [-10, 'a']
    ]);
    
    return numLog.map((num, i, arr) => i > 0 ? oper.get(num - arr[i - 1]) : '').join('')
}