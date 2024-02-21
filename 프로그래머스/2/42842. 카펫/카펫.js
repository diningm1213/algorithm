function solution(brown, yellow) {
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) {
            const x = yellow / i + 2;
            const y = i + 2
            if (x * y === brown + yellow) {
                return [x, y];
            }
        }
    }
}