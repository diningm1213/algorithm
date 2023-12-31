/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    return queries.map(([x1, y1, r]) => {
        let insideCircleCount = 0;
        points.forEach(([x2, y2]) => {
            const euclideanDist = (x2 - x1) ** 2 + (y2 - y1) ** 2;
            if (euclideanDist <= r ** 2) {
                insideCircleCount++;
            }
        })
        return insideCircleCount;
    })
};