/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let totalBeams = 0;
    let prevBeams = 0;

    bank.forEach(floor => {
        const beams = floor.match(/1/g)?.length || 0;
        if (beams) {
            if (prevBeams) {
                totalBeams += prevBeams * beams;
            }
            prevBeams = beams;
        }
    });

    return totalBeams;
};