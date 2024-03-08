function solution(str1, str2) {
    const getStringSet = (str) => {
        const regex = new RegExp('[A-Z]')
        str = str.toUpperCase();
        
        return [...str].map((c, i, s) => {
            if (regex.test(s[i]) && regex.test(s[i + 1])) {
                return s[i] + s[i + 1];
            }
            return '';
        }).filter(v => v);
    }
    const setA = getStringSet(str1);
    const setB = getStringSet(str2);
    let unionCount = setA.length + setB.length;
    let intersectionCount = 0;
    
    setA.forEach(s => {
        const index = setB.indexOf(s);
        if (index !== -1) {
            intersectionCount++;
            unionCount--;
            setB.splice(index, 1);
        }
    });
    
    if (!intersectionCount && !unionCount) {
        return 65536;
    }
    
    return ~~(65536 * intersectionCount / unionCount);
}