function solution(n) {
    const getOneCount = (binary) => [...binary].filter(v => v === '1').length;
    let oneCount = getOneCount(n.toString(2));
    
    while(true) {
        n++
        const tempOneCount = getOneCount(n.toString(2));
        if (oneCount === tempOneCount) {
            return n;
        }
    }
}