function solution(my_string, m, c) {
    return [...my_string].filter((v, i) => i % m === c - 1).join('');
}