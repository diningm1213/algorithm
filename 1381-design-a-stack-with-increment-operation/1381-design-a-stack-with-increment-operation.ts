class CustomStack {
    size: number = 0;
    stack: number[] = [];
    constructor(maxSize: number) {
        this.size = maxSize;
    }

    push(x: number): void {
        if (this.stack.length < this.size) {
            this.stack.push(x);    
        }
   }

    pop(): number {
        if (this.stack.length === 0) {
            return -1;
        }
        return this.stack.pop();
    }

    increment(k: number, val: number): void {
        const len = this.stack.length < k ? this.stack.length : k;
        
        for (let i = 0; i < len; i++) {
            this.stack[i] += val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */