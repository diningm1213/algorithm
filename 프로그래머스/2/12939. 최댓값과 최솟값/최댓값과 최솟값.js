function solution(s) {
    const nums = s.split(' ');
    nums.sort((a, b) => +a - +b);
    
    return `${nums.at(0)} ${nums.at(-1)}`;
}