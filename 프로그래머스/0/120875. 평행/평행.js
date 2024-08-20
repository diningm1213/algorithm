function solution(dots) {
    const isParallel = ([x1, y1], [x2, y2], [x3, y3], [x4, y4]) => {
        const inclination1 = (y2 - y1) / (x2 - x1) || 0;
        const inclination2 = (y4 - y3) / (x4 - x3) || 0;
        return inclination1 === inclination2;
    };
    
    return Number(isParallel(dots[0], dots[1], dots[2], dots[3]) ||
                  isParallel(dots[0], dots[2], dots[1], dots[3]) ||
                  isParallel(dots[0], dots[3], dots[1], dots[2]));
}