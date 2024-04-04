function solution(babbling) {
    const pronounceable = ["aya", "ye", "woo", "ma"];
    babbling = babbling.map(bab => {
        pronounceable.forEach((pronounce, i) => {
            bab = bab.replaceAll(pronounce, i);
        });
        
        return bab;
    });
                            
    return babbling.filter(bab => {
        let check = true;
        for (let i = 0; i < bab.length; i++) {
            const c = +bab[i];
            if (!Number.isInteger(c)) {
                return false;
            }
            if (i > 0 && c === +bab[i - 1]) {
                check = false;
            }
        }
        
        return check;
    }).length;
}