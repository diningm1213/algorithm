function solution(new_id) {
    new_id = new_id.toLowerCase()
        .match(/[a-z0-9-_.]/g).join('')
        .replaceAll(/\.+/g, '.');
    
    if (new_id.startsWith('.')) {
        new_id = new_id.slice(1);
    }

    if (new_id.endsWith('.')) {
        new_id = new_id.slice(0, new_id.length - 1);
    }
    
    if (!new_id) {
        new_id = 'a';
    }
    
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);

        if (new_id.endsWith('.')) {
            new_id = new_id.slice(0, new_id.length - 1);
        }
    }
    
    if (new_id.length <= 2) {
        new_id = new_id.padEnd(3, new_id.at(-1));
    }
    
    return new_id;
}