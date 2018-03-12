本节内容：变量的解构赋值
变量的解构：ES6允许按照一定的模式，从数组和对象中提取值，对数组或对象中的变量进行赋值

旧变量定义
var a = 1;
var b = 2;
var c = 3;
新变量定义
let [a,[b,c],d] = [1,[2,3],4];

1.数组的解构赋值（按照索引顺序进行解构赋值）
let [a,[b,c],d] = [1,[2,3],4]; 
2.对象的解构赋值（按照索引顺序进行解构赋值）
let{a,b,c} = {a:1,b:2,c:3}; 按照属性名称进行解构赋值
3.解构的默认值
let [a,b=2] = [1]
console.log(a+','+b); //1,2
3.1 解构中undefined和null的区别
let [a,b=2] = [1,undefined] 
console.log(a+','+b); //1,2 undefined相当于没有值，所以b会取默认值。
let [a,b=2] = [1,null]  
console.log(a+','+b); //1,null null相当于有值并且值为null，所以b会取null而没有取默认值。
4.字符串的解构赋值
let [n,o,p]='nih';
console.log(n+','+o+','+p); // n,i,h
