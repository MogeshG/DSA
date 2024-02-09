var fib = (num) => {
    if (num < 2) return num;
    return fib(num - 1) + fib(num - 2);
};
// console.log(fib(40));
// console.log(fib(40));
// console.log(fib(40)); 

function memoise(fn) {
    let cache = {};
    return (...args) => {
        if (args in cache) {
            console.log(cache);
            return cache[args];
        }
        
        let result = fn(...args);
        cache[args] = result;
        return result;
    };
}

let ob = memoise(fib);
console.log(ob(40));
console.log(ob(40));
console.log(ob(40));
