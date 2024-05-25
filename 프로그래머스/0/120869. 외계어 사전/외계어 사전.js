function solution(spell, dic) {
    spell = spell.sort().join('');
    
    return dic.some(d => [...d].sort().join('') === spell) ? 1 : 2;
}