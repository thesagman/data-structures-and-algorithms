// Number of Recent Calls

// class RecentCounter {
//     constructor() {
//         this.requests = [];
//         this.range = [];
//     }
//     ping(t) {
//         this.requests.push(t)
//         if (this.range.length == 2) {
//             while (this.range.length > 0) {
//                 this.range.pop()
//             }
//         }
//         this.range.push(t - 3000, t)
//         let rangeCount = 0;
//         for (let i = 0; i < this.requests.length; i++) {
//             if (this.requests[i] >= this.range[0] && this.requests[i] <= this.range[1]) {
//                 rangeCount++;
//             }
//         }
//         return rangeCount;
//     }
// }

class RecentCounter {
    constructor() {
        this.requests = [];
    }

    ping(t) {
        this.requests.push(t);
        while (this.requests[0] < t - 3000) {
            this.requests.shift();
        }
        return this.requests.length;
    }
}

const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));     // requests = [1], range is [-2999,1], return 1
console.log(recentCounter.ping(100));   // requests = [1, 100], range is [-2900,100], return 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
