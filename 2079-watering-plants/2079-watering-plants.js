/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let answer = 0;
    let water = capacity;

    for (let i = 0, n = plants.length; i < n; i++) {
        const plant = plants[i];
        if (water >= plant) {
            water -= plant;
            answer++;
        } else {
            answer += i * 2;
            i--;
            water = capacity;
        }
    }

    return answer;
};