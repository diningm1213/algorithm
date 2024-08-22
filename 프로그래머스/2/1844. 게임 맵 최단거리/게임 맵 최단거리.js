function solution(maps) {
    const valueMaps = maps.map(i => i.map(v => 0));
    
    const n = maps.length;
    const m = maps[0].length;
    
    // U -> R -> D -> L
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    // start [x, y] -> [0, 0]     
    const queue = [[0, 0]];
    valueMaps[0][0] = 1;
    
    while(queue.length > 0) {
        const [x, y] = queue.shift();
        
        dir.forEach(([_x, _y]) => {
            const nextX = x + _x;
            const nextY = y + _y;
            
            if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) {
                return;
            }
            
            if (maps[nextX][nextY] <= 0) {
                return;
            }
            
            const newValue = valueMaps[x][y] + maps[nextX][nextY];
            if (valueMaps[nextX][nextY] > 0 &&
                newValue >= valueMaps[nextX][nextY]) {
                return;
            }
            
            valueMaps[nextX][nextY] = newValue;
            queue.push([nextX, nextY]);
        });
    }
    
    return valueMaps[n - 1][m - 1] === 0 ? -1 : valueMaps[n - 1][m - 1];
}