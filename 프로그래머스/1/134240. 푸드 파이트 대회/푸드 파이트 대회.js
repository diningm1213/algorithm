function solution(food) {
    let foods = [];
    food.forEach((f, i) => {
        if (i === 0) {
            return;
        }
        
        for (let j = 2; j <= f; j += 2) {
            foods.push(i);
        }
    });
    
    return foods.join('') + '0' + foods.reverse().join('');
}