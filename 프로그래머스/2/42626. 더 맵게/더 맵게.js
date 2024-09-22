class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    isEmpty() {
        return !Boolean(this.heap.length);
    }
    
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        
        while (true) {
            let smallest = index;
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            
            if (
                leftChildIndex < length && 
                this.heap[leftChildIndex] < this.heap[smallest]
               ) {
                smallest = leftChildIndex;
            }
            
            if (
                rightChildIndex < length &&
                this.heap[rightChildIndex] < this.heap[smallest]
            ) {
                smallest = rightChildIndex;
            }
            
            if (smallest === index) break;
            
            this.swap(index, smallest);
            index = smallest;
        }
    }
    
    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }
    
    pop() {
        if (this.isEmpty()) return null;
        
        const root = this.heap[0];
        const lastNode = this.heap.pop();
        
        if (!this.isEmpty()) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }
        
        return root;
    }
}

function solution(scoville, K) {
    let ans = 0;
    const heap = new MinHeap();
    scoville.forEach(s => {
        heap.push(s);
    });
    
    while (true) {
        const a = heap.pop();
        const b = heap.pop();
        
        if (a >= K) {
            break;
        }
        
        if (!a || !b) {
            return -1;
        }
        
        heap.push(a + b * 2)
        ans++;
    }
    
    return ans;
}