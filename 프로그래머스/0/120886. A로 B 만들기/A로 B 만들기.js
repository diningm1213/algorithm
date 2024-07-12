function solution(before, after) {
    const beforeSort = [...before].sort().join('')
    const afterSort = [...after].sort().join('');
    
    return Number(beforeSort === afterSort);    
}