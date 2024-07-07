function solution(intStrs, k, s, l) {
    return intStrs.map(str => Number(str.substring(s, s + l))).filter(n => n > k);
}