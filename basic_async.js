// write a promise that prints after 3 second
// write example async function with async await keywords

const printAfter3Seconds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Printing after 3 seconds');
    }
    , 3000);
}

);

// write function containing async n await keywords
async function printAfter3SecondsAsync() {
    const message = await printAfter3Seconds;
    console.log(message);
}