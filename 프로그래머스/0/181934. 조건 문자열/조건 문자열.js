function solution(ineq, eq, n, m) {
    return Number(n === m ? eq === '=' : n < m ? ineq === '<' : ineq === '>');
}