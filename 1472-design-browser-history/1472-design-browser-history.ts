class BrowserHistory {
    history:string[] = [];
    currentIndex:number = 0;

    constructor(homepage: string) {
        this.history.push(homepage);
    }

    visit(url: string): void {
        this.currentIndex++;
        this.history = this.history.slice(0, this.currentIndex);
        this.history.push(url);   
    }

    back(steps: number): string {
        this.currentIndex -= steps;
        if (this.currentIndex < 0) {
            this.currentIndex = 0;
        }

        return this.history[this.currentIndex];
    }

    forward(steps: number): string {
        const len = this.history.length - 1;
        this.currentIndex += steps;
        if (this.currentIndex >= len) {
            this.currentIndex = len;
        }

        return this.history[this.currentIndex];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */