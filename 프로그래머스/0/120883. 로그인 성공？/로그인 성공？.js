function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    for (let i = 0; i < db.length; i++) {
        const [_id, _pw] = db[i];
        if (id === _id ) {
            if (pw === _pw) {
                return 'login';
            } else {
                return 'wrong pw';
            }   
        }
    }
    
    return 'fail';
}