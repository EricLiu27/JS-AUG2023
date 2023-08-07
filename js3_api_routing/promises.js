const noMondays = ()=> new Promise((resolve, reject) => {
        if (new Date().getDay() !== 1) {
            resolve("Good, it's not Monday!"); // fulfill the promise
        } else {
            reject("Someone has a case of the Mondays!"); // reject the promise
        }
});

console.log("A")
noMondays()
    .then(res => {
        console.log("THEN: " + res)
        console.log("B")
    }) // if the promise is fulfilled
    .catch(err => {
        console.log("CATCH: " + err)
        console.log("B")
    }); // if the promise is rejected
console.log("C")