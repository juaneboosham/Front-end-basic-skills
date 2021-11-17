class Person {
    constructor(name){
        this.name = name;
    }

    ensureThis(){
        console.log('ensureThis',this)
        console.log('1')
        console.log('2')
        console.log('3')
        console.log('4')
    }
}

let p = new Person('laomao');
p.ensureThis();    //打印出实例对象p,因为是通过p.调用的函数
var a = 0
a +=1
a +=1
a +=1
a +=1
a +=1
a +=1


let foo = p.ensureThis;
foo();

// window.onbeforeunload = function() {
//     alert('次行为会被浏览器阻止');
//     console.log('onbeforeunload')
//     return false;
//   };

// 当前状态
console.log(document.readyState);

// 状态改变时打印它
document.addEventListener('readystatechange', () => console.log(document.readyState));