/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    const answer = [];
    const m = s.length;

    for (let i = 0; i < m; i++) {
        let move = 0;
        let [y, x] = [...startPos];
        let instructions = s.slice(i);

        for (let j = 0; j < instructions.length; j++) {
            const c = instructions[j];
            switch(c) {
                case 'L':
                    x--;
                    break;
                case 'R':
                    x++;
                    break;
                case 'U':
                    y--;
                    break;
                case 'D':
                    y++;
                    break;
            }
            if (x < 0 || y < 0 || x >= n || y >= n) {
                break;
            }
            move++;
        }

        answer.push(move);
    }

    return answer;
};