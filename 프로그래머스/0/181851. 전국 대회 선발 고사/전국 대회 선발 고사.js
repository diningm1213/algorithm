function solution(rank, attendance) {
    const [a, b, c] = Object.entries(rank).filter((_, i) => attendance[i]).sort((a, b) => a[1] - b[1]);
    
    return 10000 * +a[0] + 100 * +b[0] + +c[0]
}