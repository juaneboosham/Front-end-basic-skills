
// const Promise = require('./promise.js') 

// let p = new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//         resolve('100');
//         // throw '错误'
//         // resolve('100');
//     // },1000)
// })
// .then(result=>{
//     console.log('第一个promise'+ result)
//     return result;
// },reason=>{
//     console.log('第二个promise'+ reason)
// })
// // .then()
// .then(res=>{
//     console.log('第二个promise成功',res)
// },err=>{
//     console.log('第二个promise失败',err)
// })


setImmediate(()=>{
    console.log(0)
  })
  console.log(1);
  setTimeout(()=>{
  console.log(2)
  })
  process.nextTick(()=>{
      console.log(3)
  });
  setTimeout(()=>{
  console.log(4)
  })
  console.log(5);