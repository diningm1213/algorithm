function solution(i, j, k) {
    return Array.from(Array(j - i + 1), (_, index) => index + i).join('').match(new RegExp(k, 'g'))?.length || 0;
}