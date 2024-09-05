function solution(files) {
    return files.map(file => {
        const match = file.match(/\d+/);
        const head = file.substring(0, match.index);
        const number = match[0];
        const tail = file.substring(match.index + number.length)
        return [head, number, tail];
    }).sort(([aHead, aNumber, aTail], [bHead, bNumber, bTail]) => {
        aHead = aHead.toLowerCase();
        bHead = bHead.toLowerCase();
        aNumber = Number(aNumber);
        bNumber = Number(bNumber);
        aTail = aTail.toLowerCase();
        bTail = bTail.toLowerCase();
        
        return aHead === bHead ? 
            aNumber === bNumber ? 0 : aNumber - bNumber :
            aHead.localeCompare(bHead);
        
    }).map(file => file.join(''));
}