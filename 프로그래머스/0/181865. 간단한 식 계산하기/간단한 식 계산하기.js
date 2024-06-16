function solution(binomial) {
    const [a, oper, b] = binomial.split(' ');
    return oper === '+' ? +a + +b : oper === '-' ? +a - +b : +a * +b;
}