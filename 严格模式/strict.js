'use strict'

// let foo = function(){
//     console.log(this)
// }

// foo()


function doAdd(num1, num2) {
    arguments[1] = 10;
    console.log(arguments[0] + num2);
    }
doAdd(10,20)  //10


//引用数据类型的参数，与对应的arguments值访问同一个地址
function arrAdd(arr1,arr2){
arguments[1]=[1,2,3,4,5]
arguments = 1;   // Unexpected eval or arguments in strict mode
console.log(arr2 === arguments[1]) //true
console.log(arr1.concat(arr2))  
}

arrAdd([0],[1]) //[0,1,2,3,4,5]