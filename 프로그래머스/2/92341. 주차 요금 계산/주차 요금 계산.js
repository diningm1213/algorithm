function solution(fees, records) {
    const entryTimeMap = new Map();
    const accParkingTimeMap = new Map();
    const getMinutes = (time) => {
        const [m, s] = time.split(':');
        const minutes = m * 60 + +s;
        return minutes;
    };
    
    records.forEach(record => {
        const [time, car, act] = record.split(' ');
        
        if (act === 'IN') {
            entryTimeMap.set(car, time);
        } else {
            const exitTime = getMinutes(time);
            const entryTime = getMinutes(entryTimeMap.get(car));
            entryTimeMap.delete(car);
            const parkingTime = exitTime - entryTime;
            console.log(parkingTime);
            
            accParkingTimeMap.set(car, (accParkingTimeMap.get(car) || 0) + parkingTime);
        }
    });
    
    for (const [car, time] of entryTimeMap) {
        const exitTime = getMinutes('23:59');
        const entryTime = getMinutes(time);
        const parkingTime = exitTime - entryTime;
        accParkingTimeMap.set(car, (accParkingTimeMap.get(car) || 0) + parkingTime);
    }
    
    console.log(accParkingTimeMap);
    
    return Array.from(accParkingTimeMap.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([_, time]) => time > fees[0] ? fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3] : fees[1]);
}