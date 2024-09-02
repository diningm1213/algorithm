function solution(board, moves) {
    let ans = 0;
    let topStack = Array.from(Array(board.length), () => []);
    let dollStack = [];
    
    board.forEach(row => {
        row.forEach((cell, i) => {
            cell && topStack[i].push(cell);
        });
    });
    
    moves.forEach(move => {
        const doll = topStack[move - 1].shift();
        if (doll) {
            if (dollStack.at(-1) === doll) {
                dollStack.pop();
                ans += 2;
            } else {
                dollStack.push(doll);
            }
        }
    });
    
    return ans;
}