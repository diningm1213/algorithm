function solution(cacheSize, cities) {
    let runTime = 0;
    let cache = [];
    
    cities.forEach(_city => {
        const city = _city.toLowerCase();
        const findIndex = cache.findIndex(c => c === city);
        
        cache.push(city);
        
        if (findIndex === -1) {
            if (cache.length > cacheSize) {
                cache.shift();
            }
            runTime += 5;
        } else {
            cache.splice(findIndex, 1);
            runTime++;
        }
    });
    
    return runTime;
}