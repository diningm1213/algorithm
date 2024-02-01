/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const answer = [];
    let streamNum = 1;
    
    target.forEach(n => {
        if (streamNum !== n) {
            for (;streamNum < n; streamNum++) {
                answer.push('Push');
                answer.push('Pop');
            }
        }
        answer.push('Push');
        streamNum++;
    });

    return answer;
};