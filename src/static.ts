// OOP - Static 

class Counter {
    static count: number = 0;

    static increment() {
        return Counter.count = Counter.count + 1
    }

    static decrement(){
        return Counter.count = Counter.count - 1
    }
}


const instance1 = new Counter();
console.log(`----------- Instance 1 -----------`)
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())

console.log(`----------- Instance 2 -----------`)
const instance2 = new Counter();
console.log(Counter.increment())