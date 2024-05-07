function solution(bandage, health, attacks) {
    let remainHealth = health;
    let prevAttackTime = 0;
    
    attacks.forEach(([attackTime, damage]) => {
        if (remainHealth <= 0) {
            return;
        }
        
        const healTime = attackTime - prevAttackTime - 1;
        prevAttackTime = attackTime;
        remainHealth += bandage[1] * healTime + parseInt(healTime / bandage[0]) * bandage[2];
        
        if (remainHealth > health) {
            remainHealth = health;
        }
        
        remainHealth -= damage;
    });
    
    return remainHealth > 0 ? remainHealth : -1;
}