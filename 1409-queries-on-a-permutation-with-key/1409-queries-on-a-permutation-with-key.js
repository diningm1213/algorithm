/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    const answer = [];
    const permutation = Array.from(Array(m), (_, i) => i + 1);
    
    queries.forEach(query => {
        const index = permutation.indexOf(query)
        answer.push(index);
        permutation.splice(index, 1);
        permutation.unshift(query);
    });

    return answer;
};