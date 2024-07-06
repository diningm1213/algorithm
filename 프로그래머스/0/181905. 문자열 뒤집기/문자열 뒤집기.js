function solution(my_string, s, e) {
    const substr = my_string.slice(s, e + 1);
    return my_string.replace(substr, [...substr].reverse().join(''));
}