/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const answer = s.split('');
    const lowerVowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelIndices = [];
    let vowels = [];

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (lowerVowels.includes(c.toLowerCase())) {
            vowelIndices.push(i);
            vowels.push(c);
        }
    }

    vowels.sort((a, b) => a.charCodeAt() - b.charCodeAt());
    
    vowelIndices.forEach((vowelIndex, i) => {s
        answer[vowelIndex] = vowels[i];
    });

    return answer.join('');
};