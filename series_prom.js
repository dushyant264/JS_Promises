const asyncseries=async(tasks)=>{
    try {
        for (let task of tasks) {
            const result=await task()
            console.log(result)
        }
    } catch (error) {
        console.log('error',error)
    }
}

const asyncfunc=(time)=>{
    return ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(time),1000*time)
        })
    }
}

const tasks=[asyncfunc(3),asyncfunc(2),asyncfunc(4)]

asyncseries(tasks)