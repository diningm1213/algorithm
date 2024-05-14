function solution(quiz) {
    return quiz.map(s => {
        const [x, oper, y, _, z] = s.split(' ');
        return (oper === '+' ? +x + +y === +z : +x - +y === +z) ? 'O' : 'X';
    })
}