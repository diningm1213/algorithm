function solution(k, dungeons) {
    let answer = -1;
    
    const explore = (fatigue, remainDungeons, count) => {
        remainDungeons.forEach((dungeon, i) => {
            if (fatigue >= dungeon[0]) {
                const newDungeons = [...remainDungeons];
                const newCount = count + 1;
                newDungeons.splice(i, 1);
                explore(fatigue - dungeon[1], newDungeons, newCount);
                
                if (answer < newCount) {
                    answer = newCount;
                }
            }
        });
    }
    
    explore(k, dungeons, 0);
    
    return answer;
}