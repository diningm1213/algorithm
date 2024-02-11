class BrowserHistory {
    private history:string[];
    private currentIndex:number;

    constructor(homepage: string) {
        this.history = [homepage];
        this.currentIndex = 0;
    }

    visit(url: string): void {
        this.history[++this.currentIndex] = url;
        this.history.length = this.currentIndex + 1;
    }

    back(steps: number): string {
        this.currentIndex = Math.max(0, this.currentIndex - steps);
        return this.history[this.currentIndex];
    }

    forward(steps: number): string {
        this.currentIndex = Math.min(this.currentIndex + steps, this.history.length - 1);
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