console.assert(0.1+0.2===0.3,'断言错误“0.1+0.2≠0.3”')

//生成从[minNum，maxNum]的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        default: 
            return 0; 
    } 
} 


let button = document.getElementById('button');
let resultNum = document.getElementById('result-num')
button.onclick=()=>{
    num = randomNum(0,10);
    resultNum.innerHTML = num;
}

const twoSum = function(nums, target) {
    const numMap = new Map();
    for(let i=0; i<nums.length; i++){
        if(numMap.has(nums[i])){
            return [i,numMap.get(nums[i])]
        }else{
            numMap.set(target-nums[i],i)
        }
    }
};

let result = twoSum([2,7,11,15],9)
// console.log(result);