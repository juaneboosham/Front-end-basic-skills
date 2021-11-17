function printRaw(strings) {
    console.log('Actual characters:');
    for (const string of strings) {
      console.log(string);
    }
    console.log('Escaped characters;');
    for (const rawString of strings.raw) {
      console.log(rawString);
    }
}
printRaw`\u00A9${ 'and' }\n`;

// Actual characters:
// ©
//（换行符）
// Escaped characters:
// \u00A9
// \n


//字符串数组的 .raw 属性取得每个字符串的原始内容


console.log("---------------------")

let obj = {
            a:[1,2,3],
            b:2,
            c:{name:'zhangsan',age:18}
        }

console.log(obj.propertyIsEnumerable('c'))  //true,c属性可以被for in遍历




let num = 0;
outermost:for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (i == 5 && j == 5) {
                  break outermost;
                  } 
                num++;
                }
              }
console.log(num); // 55

function isEqual(obj1,obj2){
	for (let key in obj1){
      if(typeof obj1[key] === 'object'){
        if (!isEqual(obj1[key],obj2[key])){
          return false
        }
      }
      else if(obj2.hasOwnProperty(key)){
        if(obj1[key]!==obj2[key]){
        return false
      }
    }
    else{
      return false
    }
  }
  return true
}

console.log(isEqual({1:1,2:{1:1}},{1:1,2:{1:1}}))