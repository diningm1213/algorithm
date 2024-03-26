function solution(array, commands) {
    return commands.map(([start, end, i]) => array.slice(start - 1, end).sort((a, b) => a - b)[i - 1]);
}