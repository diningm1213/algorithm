function solution(priorities, location) {
    const locations = Array.from(Array(priorities.length), (_, i) => i);
    let procedure = 0;
    
    while (priorities.length) {
        procedure++;
        
        const max = Math.max(...priorities);
        const maxIndex = priorities.findIndex(priority => priority === max); 
        priorities.push(...priorities.splice(0, maxIndex));
        locations.push(...locations.splice(0, maxIndex));
        priorities.shift();
        
        const popedLocation = locations.shift();
        if (popedLocation === location) {
            return procedure;
        }
    }
    
    return -1;
}