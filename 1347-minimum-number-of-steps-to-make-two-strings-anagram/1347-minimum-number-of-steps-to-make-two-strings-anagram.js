/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let answer = 0;
    const length = s.length;
    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < length; i++) {
        const charS = s[i];
        const charT = t[i];
        sMap.set(charS, sMap.has(charS) ? sMap.get(charS) + 1 : 1);
        tMap.set(charT, tMap.has(charT) ? tMap.get(charT) + 1 : 1);
    }

    for (const [key, value] of tMap) {
        if (sMap.has(key)) {
            const gap = value - sMap.get(key);
            if (gap > 0) {
                answer += gap;
            }
        } else {
            answer += value;
        }
    } 

    return answer;

};