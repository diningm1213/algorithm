/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const set = new Set();
    
    const traversal = (sequences, remainTiles) => {
        if (!remainTiles.length) {
            return;
        }

        remainTiles.forEach((remainTile, i, arr) => {
            const possibleSequences = sequences + remainTile;
            const tempArr = [...arr];
            set.add(possibleSequences);
            tempArr.splice(i, 1);
            
            traversal(possibleSequences, tempArr);
        });
    }

    traversal('', tiles.split(''));

    return set.size;
};