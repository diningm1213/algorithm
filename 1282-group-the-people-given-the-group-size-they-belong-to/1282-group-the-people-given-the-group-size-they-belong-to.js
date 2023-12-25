/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const group = [];
    const groupSizesMap = new Map();
    for(let i = 0; i < groupSizes.length; i++) {
        const groupSize = groupSizes[i];
        if (groupSizesMap.has(groupSize)) {
            groupSizesMap.set(groupSize, [...groupSizesMap.get(groupSize), i])
        } else {
            groupSizesMap.set(groupSize,[i]);
        }
    }

    for (const [groupSize, groupSizeMap] of groupSizesMap) {
        while (groupSizeMap.length) {
            group.push(groupSizeMap.splice(0, groupSize));
        }
    }

    return group;
};