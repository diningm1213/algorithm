function solution(phone_book) {
    const phoneBookSet = new Set();
    const phoneLengthSet = new Set();
    
    phone_book.sort((a, b) => a.length - b.length);
    for (let i = 0; i < phone_book.length; i++) {
        const phone = phone_book[i];
        for (const len of phoneLengthSet) {
            if (phoneBookSet.has(phone.substring(0, len))) {
                return false;
            }
        }
        phoneBookSet.add(phone);
        phoneLengthSet.add(phone.length);
    }
    
    return true;
}