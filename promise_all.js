// iterates through all functions in an array and returns a promise that resolves when all promises in the array have resolved
const promise_all=(funcs)=>{
    const ans=[]
    let len=funcs.length
    return new Promise((resolve,reject)=>{
        funcs.forEach((func,i)=>{
            Promise.resolve(func()).then((value)=>{
                ans[i]=value
                len--
                if(!len)resolve(ans)
            }).catch((err)=>reject(err))
        })
    })
}
// returns a func that returns a promise that resolves after a random time
const asynccreator=()=>{
    const val=Math.floor(Math.random()*10)
   return ()=>{
        return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(val),1000*val)
    })
   }
}

const funcs=[asynccreator(),asynccreator(),asynccreator()]
  

promise_all(funcs).then((results)=>{
    console.log('here are results',results)
}).catch((err) => console.log('error', err))