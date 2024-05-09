

function solution(numbers, hand) {
    const leftKeypad = [1, 4, 7];
    const rightKeypad = [3, 6, 9];
    const keypad = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'];
    let leftKey = '*';
    let rightKey = '#';
    
    const getMoveCount = (a, b) => {
        const aIndex = keypad.indexOf(a);
        const bIndex = keypad.indexOf(b);
        
        const moveY = Math.abs(parseInt(aIndex / 3) - parseInt(bIndex / 3));
        const moveX = Math.abs(aIndex % 3 - bIndex % 3);
        
        return moveY + moveX;                       
    }
    
    return numbers.map(number => {
        let resultHand = hand === 'right' ? 'R' : 'L';
        if (leftKeypad.includes(number)) {
            leftKey = number;
            resultHand = 'L';
        } else if (rightKeypad.includes(number)) {
            rightKey = number;
            resultHand = 'R';
        } else {
            const leftMoveCount = getMoveCount(leftKey, number);
            const rightMoveCount = getMoveCount(rightKey, number);
            if (leftMoveCount < rightMoveCount) {
                leftKey = number;
                resultHand = 'L';
            } else if (leftMoveCount > rightMoveCount) {
                rightKey = number;
                resultHand = 'R';
            } else {
                if (hand === 'left') {
                    leftKey = number;
                    resultHand = 'L';
                } else {
                    rightKey = number;
                    resultHand = 'R';
                }
            }
        }
        
        return resultHand;
    }).join('');
}