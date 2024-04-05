function solution(lottos, win_nums) {
    const ranking = [6, 6, 5, 4, 3, 2, 1];
    let zeroCount = 0;
    let correctCount = 0;
    
    lottos.forEach(lotto => {
        if (lotto === 0) {
            zeroCount++;
        } else if (win_nums.includes(lotto)) {
            correctCount++;
        }
    });
    
    return [ranking[zeroCount + correctCount], ranking[correctCount]];
}