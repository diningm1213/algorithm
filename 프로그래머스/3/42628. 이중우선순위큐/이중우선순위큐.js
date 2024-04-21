function solution(operations) {
    const stack = [];
    operations.forEach(operation => {
        const [type, n] = operation.split(' ');
        switch (type) {
            case 'I':
                stack.push(+n);
                stack.sort((a, b) => a - b);
                break;
            case 'D':
                if (n === '1') {
                    stack.pop();
                } else {
                    stack.shift();
                }
                break;
        }
    });
    
    return [stack[stack.length - 1] || 0, stack[0] || 0];
}