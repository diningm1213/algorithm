function solution(participant, completion) {
    const hash = new Map();
    completion.forEach(c => {
        hash.set(c, (hash.get(c) || 0) + 1);
    });
    
    for (let i = 0 ;i < participant.length; i++) {
        const p = participant[i];
        if (!hash.get(p)) {
            return p;
        } else {
            hash.set(p, hash.get(p) - 1);
        }
    }
}