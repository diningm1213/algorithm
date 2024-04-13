function solution(ingredient) {
    let count = 0;
    let temp = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        temp.push(ingredient[i]);
        if (temp.length >= 4) {
            const i = temp.length - 1;
            if (temp[i] === 1 && temp[i - 1] === 3 && 
                temp[i - 2] === 2 && temp[i - 3] === 1) {
                count++;
                temp.splice(-4);
            }
        }
    }
    
    return count;
}