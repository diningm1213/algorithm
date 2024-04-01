function solution(answers) {
    const rightCount = (arr) => {
        return answers.filter((answer, i) => {
            return answer === arr[i % arr.length];
        }).length;
    }
    const n1 = rightCount([1, 2, 3, 4, 5]);
    const n2 = rightCount([2, 1, 2, 3, 2, 4, 2, 5]);
    const n3 = rightCount([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);;
    const max = Math.max(n1, n2, n3);
    
    return [[n1, 1], [n2, 2], [n3, 3]].filter(n => n[0] === max).map(([n, i]) => i);
}