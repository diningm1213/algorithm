function solution(numbers) {
    const prime = new Set();
    
    const traversal = (number, remainNumbers) => {
        if (number) {
            prime.add(number);
        }
        
        remainNumbers.forEach((n, i) => {
            const newNumbers = [...remainNumbers];
            traversal(+(number + newNumbers.splice(i, 1)), newNumbers);
        });
    }
    
    traversal(0,  [...numbers]);
    
    return Array.from(prime).filter(n => {
        if (n === 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (!(n % i)) {
                return false;
            }
        }
        return true;
    }).length;
}