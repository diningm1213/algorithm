function solution(k, score) {
    return score.map((v, i, arr) => arr.slice(0, i + 1).sort((a, b) => b - a)[i < k - 1 ? i : k - 1]);
}