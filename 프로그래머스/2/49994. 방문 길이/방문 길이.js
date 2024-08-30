function solution(dirs) {
    const MAX_SIZE = 5;
    const moveDirs = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    }
    let startPos = [0, 0];
    const moveSet = new Set();
    
    [...dirs].forEach(dir => {
        const [x, y] = startPos;
        const [moveX, moveY] = moveDirs[dir];
        const newX = x + moveX;
        const newY = y + moveY;
        
        if (newX >= -MAX_SIZE && newX <= MAX_SIZE && 
            newY >= -MAX_SIZE && newY <= MAX_SIZE) {
            moveSet.add(`${x}-${y}-${newX}-${newY}`);
            moveSet.add(`${newX}-${newY}-${x}-${y}`);
            startPos = [newX, newY];
        }
    });
    
    return moveSet.size / 2;
}