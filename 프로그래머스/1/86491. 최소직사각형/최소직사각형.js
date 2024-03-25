function solution(sizes) {
    const ans = [0, 0];
    sizes = sizes.map(size => 
        size[0] > size[1] ? [size[1], size[0]] : size
    );
    
    sizes.forEach(size => {
        ans[0] = Math.max(ans[0], size[0]);
        ans[1] = Math.max(ans[1], size[1]);
    });
    
    return ans[0] * ans[1];
}