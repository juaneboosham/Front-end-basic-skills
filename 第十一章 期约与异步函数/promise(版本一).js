const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


class Promise {
    constructor(executor){
        this.status = PENDING;
        this.value = null;
        this.reason = null;
        this.OnFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        try{
            executor(this.resolve.bind(this),this.reject.bind(this)); 
        }catch(e){
            this.reject(e)
        }
    }
 
    resolve(value){
        if(this.status === PENDING){
            this.value = value;
            this.status = FULFILLED
            // this.OnFulfilledCallbacks[0](value)
            this.OnFulfilledCallbacks.forEach(onFulfilled=>{
                onFulfilled()
            })
        }
    }

    reject(reason){
        if(this.status === PENDING){
            this.reason = reason;
            this.status = REJECTED;
            this.onRejectedCallbacks.forEach(onRejected=>{
                onRejected()
            })
            // this.onRejectedCallbacks[0](reason)
        }
    } 

    then(onFulfilled,onRejected){
        onFulfilled = typeof onFulfilled === 'function'? onFulfilled : value=>value
        onRejected = typeof onRejected === 'function'? onRejected : error=>{throw error}

        let promise2 = new Promise((resolve,reject)=>{
            if(this.status === PENDING){
                this.OnFulfilledCallbacks.push(()=>{
                    setTimeout(()=>{
                        try{
                            let x = onFulfilled(this.value);
                            resolvePromise(x,promise2,resolve,reject)
                        }catch(error){
                            reject(error)
                        }
                    })
                });
                this.onRejectedCallbacks.push(()=>{
                    setTimeout(()=>{
                        try{
                            let x = onRejected(this.reason);
                            resolvePromise(x,promise2,resolve,reject)
                        }catch(error){
                            reject(error)
                        }
                    })
                }); 
            }
            if(this.status === FULFILLED){
                setTimeout(()=>{
                    try{
                        let x = onFulfilled(this.value);
                        resolvePromise(x,promise2,resolve,reject)
                    }catch(error){
                        reject(error)
                    }
                })
            }
            if(this.status === REJECTED){
                setTimeout(()=>{
                    try{
                        let x = onRejected(this.reason);
                        resolvePromise(x,promise2,resolve,reject)
                    }catch(error){
                        reject(error)
                    }
                })
            }
        })
        return promise2
    }
}


function resolvePromise(x,promise2,resolve,reject){
    if(x === promise2){
        return reject(new TypeError('不能循环调用'))
    }
    if(x && (typeof x === 'object') || (typeof x === 'function')){
        try{
            let then = x.then
            if(typeof x === 'function'){
                then.call(x,v=>{
                    resolvePromise(v,promise2,resolve,reject);
                },reason=>{
                    reject(reason)
                })
            }else{
                resolve(x)
            }
        }catch(error){ 
            reject(error)
        }
    }else{
        resolve(x)
    }
}

module.exports = Promise
