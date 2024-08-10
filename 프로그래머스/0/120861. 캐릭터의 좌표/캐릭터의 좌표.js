function solution(keyinput, board) {    
    const MIN = 0;
    const MAX = 1;
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
            if (coord[i] < board[i][MIN]) {
                coord[i] = board[i][MIN]
            } else if (coord[i] > board[i][MAX]) {
                coord[i] = board[i][MAX]
            } 
        });
    });
    
    return coord;
}

