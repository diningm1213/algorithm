/**
 * @param {number} n
 * @return {number}
 */
// const one = ['a', 'e', 'i', 'o', 'u'];
// const two = [
//     'aa', 'ae', 'ai', 'ao', 'au',
//     'ee', 'ei', 'eo', 'eu',
//     'ii', 'io', 'iu',
//     'oo', 'ou',
//     'uu',
// ];
// const three = [
//     'aaa', 'aae', 'aai', 'aao', 'aau',
//     'aee', 'aei', 'aeo', 'aeu',
//     'aii', 'aio', 'aiu',
//     'aoo', 'aou',
//     'auu',
//     'eee', 'eei', 'eeo', 'eeu',
//     'eii', 'eio', 'eiu',
//     'eoo', 'eou',
//     'euu',
//     'iii', 'iio', 'iiu',
//     'ioo', 'iou',
//     'iuu',
//     'ooo', 'oou',
//     'ouu',
//     'uuu',
// ];

var countVowelStrings = function(n) {
    let vowels = [1, 1, 1, 1, 1];

    for (let j = 1; j < n; j++) {
        vowels = vowels.map((_, i, arr) => arr.slice(i, 5).reduce((acc, cur) => acc + cur, 0));
    }

    return vowels.reduce((acc, cur) => acc + cur, 0);
};