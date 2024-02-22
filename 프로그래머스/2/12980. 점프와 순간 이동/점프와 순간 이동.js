function solution(n)
{
    return [...n.toString(2)].reduce((acc, cur) => +acc + +cur, 0);
}