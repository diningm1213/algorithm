function solution(keyinput, board) {    
    const dir = {
        'up': [0, 1],
        'down': [0, -1],
        'left': [-1, 0],
        'right': [1, 0]
    };
    let coord = [0, 0];
    
    board = board.map(v => {
        const range = (v - 1) / 2;
        return [-range, range];
    });
    
    keyinput.forEach(key => {
        dir[key].forEach((v, i) => {
            coord[i] += v;
            if (coord[i] < board[i][0]) {
                coord[i] = board[i][0]
            } else if (coord[i] > board[i][1]) {
                coord[i] = board[i][1]
            } 
        });
    });
    
    return coord;
}

