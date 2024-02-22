function solution(n,a,b)
{
    let count = 0;
    
    while (Math.ceil(a) !== Math.ceil(b)) {
        count++;
        a /= 2;
        b /= 2;
    }
    
    return count;
}