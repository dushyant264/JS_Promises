class mypromise {
    constructor(executor) {
        this.value = null;
        this.reason = null;
        this.stat = 'pending';
        this.onfulfilledcallbacks = [];
        this.onrejectedcallbacks = [];

        const resolve = (value) => {
            if (this.stat !== 'pending') return;
            this.value = value;
            this.stat = 'fulfilled';
            this.onfulfilledcallbacks.forEach(callback => callback(value));
        }

        const reject = (reason) => {
            if (this.stat !== 'pending') return;
            this.reason = reason;
            this.stat = 'rejected';
            this.onrejectedcallbacks.forEach(callback => callback(reason));
        }

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onfulfilled) {
        if (this.stat === 'fulfilled') {
            onfulfilled(this.value);
        } else if (this.stat === 'pending') {
            this.onfulfilledcallbacks.push(onfulfilled);
        }
        return this;
    }

    catch(onrejected) {
        if (this.stat === 'rejected') {
            onrejected(this.reason);
        } else if (this.stat === 'pending') {
            this.onrejectedcallbacks.push(onrejected);
        }
        return this;
    }
}
console.log('Promise implementation');
const printAfter3Seconds = new mypromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Printing after 3 seconds');
    }, 3000);
});

printAfter3Seconds.then(message => {
    console.log(message);
}).catch(error => {
    console.error(error);
});
