function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);
    const rankMap = new Map(sorted.map((e, i) => [e, i + 1]));
    return emergency.map(e => rankMap.get(e));
}