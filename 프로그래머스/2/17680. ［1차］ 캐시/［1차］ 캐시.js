function solution(cacheSize, cities) {
    let runTime = 0;
    let cache = [];
    
    cities.forEach(_city => {
        const city = _city.toLowerCase();
        const index = cache.indexOf(city);
        
        cache.push(city);
        
        if (index === -1) {
            if (cache.length > cacheSize) {
                cache.shift();
            }
            runTime += 5;
        } else {
            cache.splice(index, 1);
            runTime++;
        }
    });
    
    return runTime;
}