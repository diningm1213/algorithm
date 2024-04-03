function solution(N, stages) {
    let userCount = stages.length
    const failUserCounts = Array(N).fill(0);
    stages.forEach(stage => {
        if (stage <= N) {
            failUserCounts[stage - 1]++;    
        }
    });
    
    return failUserCounts.map((failUserCount, i) => {
        const failRate = failUserCount / userCount;
        userCount -= failUserCount;
        return [failRate || 0, i + 1];
    }).sort((a, b) => b[0] - a[0]).map(v => v[1]);
}