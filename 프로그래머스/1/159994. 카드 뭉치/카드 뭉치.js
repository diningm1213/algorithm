function solution(cards1, cards2, goal) {
    for (let i = 0; i < goal.length; i++) {
        const card = goal[i];
        
        if (cards1[0] === card) {
            cards1.shift();
        } else if (cards2[0] === card) {
            cards2.shift();
        } else {
            return 'No';
        }
    }
    
    return 'Yes';
}