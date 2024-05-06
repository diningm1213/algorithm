function solution(park, routes) {
    const dirPos = {
        N: [-1, 0],
        S: [1, 0],
        W: [0, -1],
        E: [0, 1],
    }
    let pos = [0, 0];
    
    for (let y = 0; y < park.length; y++) {
        for (let x = 0; x < park[y].length; x++) {
            if (park[y][x] === 'S') {
                pos = [y, x];
            }
        }
    }
    
    routes.forEach(route => {
        const [dir, step] = route.split(' ');
        const [dirY, dirX] = dirPos[dir];
        
        let [tempY, tempX] = pos;
        
        for (let i = 0; i < step; i++) {
            tempY += dirY;
            tempX += dirX;
            if (park[tempY]?.[tempX] !== 'O' &&
                park[tempY]?.[tempX] !== 'S') {
                return;
            }
        }
        
        pos = [tempY, tempX];
    });
    
    return pos;
}