function solution(n, works) {
    works.sort((a, b) => b - a);
    
    for (let i = 0; i < n; i++) {
        works[0]--;
        for (let j = 0; j < works.length; j++) {
            if (works[j] < works[j + 1]) {
                const temp = works[j];
                works[j] = works[j + 1];
                works[j + 1] = temp;
            } else {
                break;
            }
        } 
    }
    
    return works.reduce((acc, cur) => acc + (cur > 0 ? cur ** 2 : 0), 0);
}