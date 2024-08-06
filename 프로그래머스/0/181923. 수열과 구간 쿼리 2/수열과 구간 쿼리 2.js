function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const subArr = arr.slice(s, e + 1).filter(v => v > k);
        return subArr.length ? Math.min(...subArr) : -1;
    });
}