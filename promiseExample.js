var customPromise = new Promise((resolve, reject) => {
    let x = 0;
    if (x != 0) {
        resolve('Promise resolved');
    }
    reject('Rejected Promise');
})

console.log("Prior promise");
customPromise.then(value => console.log("Promise returned value " + value),
 err => console.log(err));