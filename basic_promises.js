// explain promises, resolve , reject etc
// 1. Promise is a object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// 2. A promise is in one of these states:
//    - pending: initial state, neither fulfilled nor rejected.
//    - fulfilled: meaning that the operation completed successfully.
//    - rejected: meaning that the operation failed.
// 3. A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).
// 4. A promise is an object that represents the return value or the thrown exception that the function may eventually provide.
// 5. A promise is an object that represents the eventual result of an asynchronous operation.
// 6. A promise is an object that represents the result of an asynchronous function
// what is resolve and reject in promises?
// 1. resolve() is a function that is used when a promise is successful.
// 2. reject() is a function that is used when a promise is unsuccessful.
//explain using sample promises
// 1. Create a promise that resolves after 3 seconds
// 2. Create a promise that rejects after 3 seconds
// 3. Create a promise that resolves after 3 seconds and returns a message
// write a promise that prints after 3 second




const printAfter3Seconds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Printing after 3 seconds');
    }
    , 3000);
}
);
// write a promise in which you can pass a message and it will print after 3 seconds
const printMessageAfter3Seconds = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }
        , 3000);
    }
    );
}
// write a promise in which resolve func is summation of input array
const sumArray = (array) => {
    return new Promise((resolve, reject) => {
        let sum = 0;
        array.forEach((element) => {
            sum += element;
        }
        );
        resolve(sum);
    }
    );
}
// explain need of promise 
// 1. Promises are used to handle asynchronous operations in JavaScript.
// 2. Promises are used to avoid callback hell in JavaScript.
// 3. Promises are used to handle multiple asynchronous operations.
// 4. Promises are used to provide a better way to handle the results of asynchronous operations.

// explain use of async 
// 1. async is used to define an asynchronous function.
// 2. async returns a promise.
// 3. async function is used to write asynchronous code in a synchronous way.

// explain use of await
// 1. await is used to wait for a promise to resolve or reject.