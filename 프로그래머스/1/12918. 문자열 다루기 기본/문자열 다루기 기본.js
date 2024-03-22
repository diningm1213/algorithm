function solution(s) {
    if (!(s.length === 4 || s.length === 6)) {
        return false;
    }
    return !s.replace(/[0-9]+/g, '');
}