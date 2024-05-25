function solution(spell, dic) {
    spell = spell.sort().join('');
    for (let i = 0; i < dic.length; i++) {
        if (spell === dic[i].split('').sort().join('')) {
            return 1;
        }
    }
    
    return 2;
}