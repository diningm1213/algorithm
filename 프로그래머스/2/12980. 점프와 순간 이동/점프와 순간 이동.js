function solution(n)
{
    let count = 0;
    while (n > 0) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n -= 1;
            count++;
        }
    }
    
    return count;
}