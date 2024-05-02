function solution(wallpaper) {
    let arrY = [];
    let arrX = [];
    
    wallpaper.forEach((row, y) => {
        [...row].forEach((cell, x) => {
            if (cell === '#') {
                arrY.push(y);
                arrX.push(x);
            }
        })
    });
    
    arrY.sort((a, b) => a - b);
    arrX.sort((a, b) => a - b);
    
    return [arrY[0], arrX[0], arrY.at(-1) + 1, arrX.at(-1) + 1];
}