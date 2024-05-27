function solution(dots) {
    const x = dots.map(dot => dot[0]).sort((a, b) => a - b);
    const y = dots.map(dot => dot[1]).sort((a, b) => a - b);
    
    return (x.at(-1) - x[0]) * (y.at(-1) - y[0]) 
}