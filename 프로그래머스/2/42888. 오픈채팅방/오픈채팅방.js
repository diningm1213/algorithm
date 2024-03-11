function solution(record) {
    const result = [];
    const idMap = new Map();
    
    record.forEach(s => {
        const [action, uid, nickname] = s.split(' ');
        switch (action) {
            case 'Enter':
                idMap.set(uid, nickname);
                result.push([uid, '님이 들어왔습니다.']);
                break;
            case 'Leave':
                result.push([uid, '님이 나갔습니다.']);
                break;
            case 'Change':
                idMap.set(uid, nickname);
                break;
        }
    });
    
    return result.map(([uid, s]) => `${idMap.get(uid)}${s}`);
}