function solution(my_string, m, c) {
    return my_string.match(new RegExp('.'.repeat(m), 'g')).map(v => v[c - 1]).join('');
}