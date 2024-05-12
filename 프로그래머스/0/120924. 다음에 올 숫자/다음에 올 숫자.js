function solution(common) {
    const gap1 = common[1] - common[0];
    const gap2 = common[2] - common[1];
    const last = common.at(-1);
    
    return gap1 === gap2 ? last + gap1 : last * gap2 / gap1;
     
}