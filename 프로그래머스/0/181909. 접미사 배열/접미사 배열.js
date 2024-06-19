function solution(my_string) {
    return [...my_string].map((_, i, arr) => arr.slice(i).join('')).sort();
}