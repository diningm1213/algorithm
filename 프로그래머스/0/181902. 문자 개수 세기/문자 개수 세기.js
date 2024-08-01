function solution(my_string) {
    const ALPHABET_LEN = 26;
    const ans = Array(ALPHABET_LEN * 2).fill(0);
    
    [...my_string].forEach(c => {
        let index = 0;
        if (c.match(/[A-Z]/)) {
            index = c.charCodeAt() - 'A'.charCodeAt();
            ans[index]++;
        } else if (c.match(/[a-z]/)) {
            index = c.charCodeAt() - 'a'.charCodeAt();
            ans[index + ALPHABET_LEN]++;
        }
    });
    
    return ans;
}