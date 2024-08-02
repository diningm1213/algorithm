function solution(numbers) {
    const engNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    engNumbers.forEach((engNumber, i) =>{
        numbers = numbers.replaceAll(engNumber, i);
    });
    
    return +numbers;
}