// class MyPromise {
//     constructor(executor){
//         // 初始化状态
//         this.initValue()
//         // 初始化this指向
//         this.initBind()
//         // 执行传进来的函数
//         try{
//             executor(this.resolve,this.reject)
//         }
//         catch(e){
//             this.reject(e)
//         }
//     }

//     initBind(){
//         this.resolve = this.resolve.bind(this);
//         this.reject = this.reject.bind(this);
//         this.onFulfilledCallbacks = [];
//         this.onRejectedCallbacks = [];
//     }

//     initValue(){
//         this.PromiseResult = undefined;
//         this.PromiseState = 'pending'
//     }

//     resolve(value){
//         if(this.PromiseState === 'pending'){
//             this.PromiseState = 'fulfilled'
//             this.PromiseResult = value
//             while (this.onFulfilledCallbacks.length){
//                 this.onFulfilledCallbacks.shift()(this.PromiseResult)
//             }
//         }
//     }

//     reject(reson){
//         if(this.PromiseState === 'pending'){
//             this.PromiseState = 'rejected'
//             this.PromiseResult =  reson
//             while(this.onRejectedCallbacks.length){
//                 this.onRejectedCallbacks.shift()(this.PromiseResult)
//             }
//         }
//     }

//     then(onFulfilled,onRejected){
//         //接收两个回调函数

//         //校验参数
//         onFulfilled = typeof onFulfilled === 'function'? onFulfilled : val => val
//         onRejected = typeof onRejected === 'function'? onRejected : reason => {throw reason}

//         var thenPromise = new MyPromise((resolve,reject)=>{
//                 const resolvePromise = cb =>{
//                     try{
//                         const x = cb(this.PromiseResult)
//                         if(x instanceof MyPromise){
//                             x.then(resolve,reject)
//                         }else{
//                             resolve(x)
//                         }
//                     }catch(err){
//                         reject(err)
//                     }
//                     if(this.PromiseState === 'fulfilled'){
//                         resolvePromise(onFulfilled)
//                     }else if(this.PromiseState === 'rejected'){
//                         resolvePromise(onRejected)
//                     }else if(this.PromiseState === 'pending') {
//                         this.onFulfilledCallbacks.push(onFulfilled)
//                         this.onRejectedCallbacks.push(onRejected)
//                     }
//                 }
//             }
//         )
//         return thenPromise
//     }
// }

// const test2 = new MyPromise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('成功')
//     },1000)
// }).then(res=>{
//     console.log(res)
// })
// // 成功

// // console.log(p1)  //MyPromise {PromiseResult: '错误', PromiseState: 'rejected', resolve: ƒ, reject: ƒ}

// // const p2 = new MyPromise((resolve,reject)=>{
// //     reject('失败')
// //     resolve('成功')
// // })
// // console.log(p2) //MyPromise {PromiseResult: '失败', PromiseState: 'rejected', resolve: ƒ, reject: ƒ}




