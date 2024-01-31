/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const answer = [];
    let totalPart = 0;
    let partition = 0;

    for(let i = 0; i < s.length ; i++) {
        const lastIndex = s.lastIndexOf(s[i]);        
        if (partition < lastIndex) {
            partition = lastIndex;
        }
        
        if (i === partition) {
            const size = partition - totalPart;
            answer.push(size);
            totalPart += size;
        }
    }

    // zero index
    answer[0]++;

    return answer;
};