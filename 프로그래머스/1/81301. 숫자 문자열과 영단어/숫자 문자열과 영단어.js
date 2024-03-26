function solution(s) {
    const numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    
    numbers.forEach((n, i) => {
        s = s.replaceAll(n, i);
    });

    return +s;
}