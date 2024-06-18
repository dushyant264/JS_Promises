const  async_parallel =async(tasks,callback)=>{
    const results=await Promise.all(tasks.map((task)=>task()))
    callback(results)
}

const asyncfunc=(time)=>{
    return ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(time),1000*time)
        })
    }
}

const tasks=[asyncfunc(3),asyncfunc(2),asyncfunc(4)]
async_parallel(tasks,(results)=>{
    console.log('results',results)
})