const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


function resolvePromise(result,promise2,resolve,reject){
    //定义一个标识,resolve或reject只能调用一次
    let called = false;

    if(result === promise2){
        return reject(new TypeError('类型错误'))
    }
    //判断result是不是promise，如果是promise则解析promise
    //不是则直接resolve
    if((typeof result === 'object') && (typeof result !== null) || (typeof result === 'function')){
        //获取result.then的时候可能报错
        try{
        //如果是object,则以是否有then方法来区分是不是promise
        const then = result.then;
        if(typeof then === 'function'){
           //是promise，解析promise
            then.call(result,
            result1=>{
                if(called) return;
                called = true;
                resolvePromise(result1,promise2,resolve,reject)
            },no=>{
                if(called) return;
                called = true;
                reject(no)
            })
        }else{
            if(called) return;
            called = true;
             //result.then方法不是函数,则说明result不是一个promise
            resolve(result)
        }
        }catch(e){
            if(called) return;
            called = true;
            reject(e)
        }
    }else{
        if(called) return;
        called = true;
        resolve(result)
    }
}

class Promise {
    constructor(executor){
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        // 成功或失败处理函数的数组。为什么是数组？因为一个promise可以调多次.then。
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        //传入的函数executor是同步执行的
        const resolve = (value) => {
            if(this.status === PENDING){
                this.status = FULFILLED;
                this.value = value;
                this.onFulfilledCallbacks.forEach(onFulfilled=>{
                    queueMicrotask(()=>{
                        onFulfilled()
                    })
                })
            }
        }
        const reject = (reason) => {
            if(this.status === PENDING){
                this.status = REJECTED;
                this.reason = reason;
                this.onRejectedCallbacks.forEach(onRejected=>{
                    queueMicrotask(()=>{
                        onRejected()
                    })
                })
            }
        }

        try{
            executor(resolve,reject);
        }catch(e){
            reject(e)
        }

    }

    then(onFulfilled,onRejected){
        //实现then()的穿透
        onFulfilled = typeof onFulfilled === 'function'? onFulfilled : value=>value
        onRejected = typeof onRejected === 'function'? onRejected : error=>{throw error}


        const promise2 = new Promise((resolve,reject)=>{
            if(this.status === FULFILLED){
                //promise A+不允许立即执行，需放到异步任务队列
                //使用浏览器提供的微任务方法queueMicrotask
                queueMicrotask(()=>{
                    //处理函数的返回值
                    try{
                        const result = onFulfilled(this.value)
                        resolvePromise(result,promise2,resolve,reject)
                    }catch(e){
                        console.log('捕获到')
                        reject(e)
                    }
                })
            }
    
            if(this.status === REJECTED){
                queueMicrotask(()=>{
                    try{
                        const result = onRejected(this.reason)
                        resolvePromise(result,promise2,resolve,reject)
                    }catch(e){
                        reject(e)
                    }
                })
            }
    
            if(this.status === PENDING){
                this.onFulfilledCallbacks.push(()=>{
                    try{
                        const result = onFulfilled(this.value)
                        resolvePromise(result,promise2,resolve,reject)
                    }catch(e){
                        reject(e)
                    }
                });
                this.onRejectedCallbacks.push(()=>{
                    try{
                        const result = onRejected(this.reason)
                        resolvePromise(result,promise2,resolve,reject)                        
                    }catch(e){
                        reject(e)
                    } 
                });
            }
        })

        return promise2;
    }
}