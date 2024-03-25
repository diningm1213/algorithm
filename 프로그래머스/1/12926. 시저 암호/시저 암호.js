function solution(s, n) {
    
    return [...s].map(c => {
        if (c >= 'a' && c <= 'z') {
            return String.fromCharCode('a'.charCodeAt() + (c.charCodeAt() + n - 'a'.charCodeAt()) % 26);
        } else if (c >= 'A' && c <= 'Z') {
            return String.fromCharCode('A'.charCodeAt() + (c.charCodeAt() + n - 'A'.charCodeAt()) % 26);
        } else {
            return ' ';
        }
    }).join('');
}