function solution(str_list) {
    const i = str_list.join('').match(/[rl]/)?.index ?? -1;
    return i === -1 ? [] : str_list[i] === 'l' ? str_list.slice(0, i) : str_list.slice(i + 1);
}