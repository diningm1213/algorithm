/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const answer = Array(k).fill(0);
    const map = new Map();
    logs.forEach(([id, time]) => {
        const getMap = map.get(id);
        if (getMap) {
            getMap.add(time);
        } else {
            map.set(id, new Set([time]))
        }
    });

    for (const value of map.values()) {
        answer[value.size - 1]++;
    }

    return answer;
};