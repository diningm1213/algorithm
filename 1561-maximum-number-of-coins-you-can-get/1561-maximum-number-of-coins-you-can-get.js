/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let max = 0;
    const n = piles.length / 3;
    piles.sort((a, b) => b - a);
    
    for (let i = 0; i < n; i++) {
        max += piles[i * 2 + 1];
    }

    return max;
};