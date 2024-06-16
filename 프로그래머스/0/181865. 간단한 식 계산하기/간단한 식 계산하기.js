function solution(binomial) {
    const opers = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b
    };
    
    const [a, oper, b] = binomial.split(' ');
    return opers[oper](+a, +b);
}