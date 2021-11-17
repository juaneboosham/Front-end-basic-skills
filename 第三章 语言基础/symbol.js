let feib = Symbol()
console.log(typeof feib)  //"symbol"


let s1 = Symbol("feib")
let s2 = Symbol("laomao")
console.log(s1.toString())     //“Symbol(feib)”
console.log(s2.toString())     //“Symbol(laomao)”


let s3 = Symbol("feibb")
let s4 = Symbol("feibb")

console.log(s3==s4)   //false,Symbol的参数只是作为描述，相同参数的Symbol是不同的


let sym = Symbol();
console.log(Boolean(sym)) // true
console.log(!sym)  // false
console.log(sym.description) // "foo"



const obj = {};
obj.sym = 1;  //点后面总是字符串,所以Symbol值作为对象属性名时，不能用点运算符
console.log(obj[sym])    //undefined
console.log(obj['sym'])  //1



//Symbol.hasInstance
// class Even {
//     static [Symbol.hasInstance](obj) {
//       return Number(obj) % 2 === 0;
//     }
//   }
  
  // 等同于
const Even = {
    [Symbol.hasInstance](obj) {
      return Number(obj) % 2 === 0;
    }
  };
  
console.log(1 instanceof Even) // false
console.log(2 instanceof Even) // true
console.log(12345 instanceof Even) // false


console.log("-----------------")


//Class的get和set
class Fa{
    constructor(){
        this.proxyValue = 1;
    }

    proxyValueOut = 2;

    static feib(){
        return "这是feib方法"
    }

    get one(){
        console.log("get prop")
        return this.prop;
    }
      
    set one(value){
        console.log("set prop")
        this.prop = value
    }
}


 const child = new Fa();
 console.log(child.proxyValue)
 console.log(child.hasOwnProperty("proxyValue"))
 console.log(child.hasOwnProperty("proxyValueOut"))    //proxyValue


 const feib1 = child.one;
 child.one = 3;


console.log(child.feib)   //undefined
console.log(Fa.feib())    //这是feib方法