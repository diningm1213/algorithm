function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < land[i].length; j++) {
            const temp = [...land[i - 1]];
            temp.splice(j, 1);
            const max = Math.max(...temp);
            land[i][j] += max;
        }
    }
    
    return Math.max(...land[land.length - 1]);
}