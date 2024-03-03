function solution(cacheSize, cities) {
    let runTime = 0;
    let cache = [];
    
    cities.forEach(_city => {
        const city = _city.toLowerCase();
        const findIndex = cache.findIndex(c => c === city);
        if (findIndex === -1) {
            cache.push(city);
            if (cache.length > cacheSize) {
                cache.shift();
            }
            runTime += 5;
        } else {
            cache.splice(findIndex, 1);
            cache.push(city);
            runTime++;
        }
    });
    
    return runTime;
}