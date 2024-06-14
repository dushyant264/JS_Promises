// resolve any resolves the first resolve

const promise_any=(funcs)=>{
    let cnt=funcs.length
    return new Promise((resolve,reject)=>{
        funcs.forEach((func,i)=>{
            Promise.resolve(func).then((value)=>{
                resolve(value)
            }).catch((err)=>{
                cnt--
                if(!cnt)reject('All promises rejected')
            })
        })
    })
}

const promise_1=new Promise((resolve,reject)=>{
    setTimeout(reject,300,'three')
})
const promise_2=new Promise((resolve,reject)=>{
    setTimeout(reject,200,'two')
})

promise_any([promise_1,promise_2]).then((result)=>{
    console.log('result',result)
}).catch((err)=>{
    console.log('error',err)
})