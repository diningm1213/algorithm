/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let len = boxes.length;
    const answer = Array(len).fill(0);
    let ballIndexArr = [];

    for (let i = 0; i < len; i++) {
        if (boxes[i] === '1') {
            ballIndexArr.push(i);
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < ballIndexArr.length; j++) {
            answer[i] += Math.abs(ballIndexArr[j] - i);
        }
    }

    return answer;
};