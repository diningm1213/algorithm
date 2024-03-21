function solution(s) {
    return [...s].sort((a, b) => a.charCodeAt() - b.charCodeAt()).reverse().join('');
}