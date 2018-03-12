ES6新增let/const定义变量
1. var/let/const 三者区别
var 定义全局变量，会污染数据
let 定义局部变量，局部使用
const 定义常量，从声明开始不可再修改

for(var i=0;i<10;i++){
console.log('循环体中:'+i); //1,2,3,4,5,6,7,8,9,10
}
console.log('循环体外:'+i); //10 var定义的局部变量i，污染了外部变量i