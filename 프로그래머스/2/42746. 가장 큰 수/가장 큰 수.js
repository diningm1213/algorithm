function solution(numbers) {
    const ans = numbers.map(String).sort((a, b) => (b + a) - (a + b)).join('')
    return ans <= 0 ? '0' : ans;
}