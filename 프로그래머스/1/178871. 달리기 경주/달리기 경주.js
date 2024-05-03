function solution(players, callings) {
    const playerObj = Object.fromEntries(players.map((player, i) => [player, i]));
    
    
    callings.forEach(calling => {
        const index = playerObj[calling];
        const prevPlayer = players[index - 1];
        players[index - 1] = players[index];
        players[index] = prevPlayer;
        
        playerObj[calling] -= 1;
        playerObj[prevPlayer] += 1;
    });
    
    return players;
}