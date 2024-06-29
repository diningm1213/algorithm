function solution(age) {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    return [...String(age)].map(v => alphabets[v]).join('');
}