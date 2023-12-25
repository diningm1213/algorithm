/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const groups = [];
    const groupSizesObj = {}
    for(let i = 0; i < groupSizes.length; i++) {
        const groupSize = groupSizes[i];
        if (!groupSizesObj[groupSize]) {
            groupSizesObj[groupSize] = [];
        }
        groupSizesObj[groupSize].push(i);

        if (groupSizesObj[groupSize].length === groupSize) {
            groups.push(groupSizesObj[groupSize]);
            groupSizesObj[groupSize] = null;
        }
    }

    return groups;
};