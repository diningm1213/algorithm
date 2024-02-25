function solution(s) {
    return JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
            .sort((a, b) => a.length - b.length)
            .reduce((acc, cur, arr) => [...acc, ...cur.filter(v => !acc.includes(v))], []);
    
}