function solution(a, b, c) {
    const set = new Set([a, b, c]);
    return set.size === 3 ? a + b + c : set.size === 2 ? (a + b + c) * (a ** 2 + b ** 2 + c ** 2) : (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
}