function solution(name, yearning, photo) {
    const map = {};
    name.forEach((n, i) => {
        map[n] = yearning[i];
    });
    
    return photo.map(arr => arr.reduce((acc, cur) => acc + (map[cur] || 0), 0));
}