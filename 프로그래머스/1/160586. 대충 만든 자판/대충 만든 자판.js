function solution(keymap, targets) {
    const ans = Array(targets.length).fill(0);
    const map = new Map();
    keymap.forEach(keys => {
        [...keys].forEach((key, i) => {
            if (!map.has(key) || map.get(key) > i + 1) {
                map.set(key, i + 1);
            }
        });
    });
    
    targets.forEach((target, i) => {
        for (let j = 0; j < target.length; j++) {
            if (map.has(target[j])) {
                ans[i] += map.get(target[j]);
            } else {
                ans[i] = -1;
                break;
            }
        }
    });
    
    return ans;
}