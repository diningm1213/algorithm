function solution(want, number, discount) {
    const wantList = {};
    let answer = 0;
    let check = true;
    for (let i = 0, len = want.length; i < len; i++) {
        wantList[want[i]] = number[i];
    }
    
    discount.forEach((_, i) => {
        const tempWantList = {...wantList};
        check = true;
        for (let j = 0; j < 10; j++) {
            const product = discount[i + j];
            if (tempWantList[product]) {
                tempWantList[product] -= 1;
            } else {
                check = false;
                break;
            }
        }
        
        if (check && Object.values(tempWantList).every(v => v === 0)) {
            answer++;
        }
    });
    
    return answer;
}