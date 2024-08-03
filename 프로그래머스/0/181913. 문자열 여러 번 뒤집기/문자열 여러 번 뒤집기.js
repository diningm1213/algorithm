function solution(my_string, queries) {
    const str = [...my_string];
    
    queries.forEach(([s, e]) => {
        const changeStr = str.slice(s, e + 1);
        str.splice(s, e - s + 1, ...changeStr.reverse());
    });
    
    return str.join('');
}