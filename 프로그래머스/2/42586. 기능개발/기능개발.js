function solution(progresses, speeds) {
    let len = 0;
    let time = 0;;
    let count = 0;
    let ans = [];
    
    while(len = progresses.length) {
        count = 0;
        time++;
        for (let i = 0; i < len; i++) {
            const progress = progresses[i] + time * speeds[i];
            if (progress >= 100) {
                count++;
            } else {
                break;
            }
        }
        if (count) {
            progresses.splice(0, count);
            speeds.splice(0, count);
            ans.push(count);
        }
    }
    
    return ans;
}