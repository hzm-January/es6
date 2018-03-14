本节内容：变量的解构赋值
变量的解构：ES6允许按照一定的模式，从数组和对象中提取值，对数组或对象中的变量进行赋值

旧变量定义
var a = 1;
var b = 2;
var c = 3;
新变量定义
let [a,[b,c],d] = [1,[2,3],4];

1.数组的解构赋值（按照索引顺序进行解构赋值）
let [a,[b,c],d] = [1,[2,3],4]; (嵌套数组解构)
1.1 函数传参解构
var arr = ['abc','efg','hij'];
function fu1([a,b,c]){}
1.2 for循环解构
var arr = [['a','b'],['c','d'],['e','f']];
for(let [m,n] of arr){}

2.对象的解构赋值（按照属性名称进行解构赋值）
var obj = {
    name: 'chris',
    sex: 'male',
    age: 26,
    son: {
        sonname: '大熊',
        sonsex: 'male',
        sonage: 1
    }
};
var {name, sex, age, son} = obj;
2.1 对象传参的解构
function fun2({sex,name,age}){}
2.2 嵌套对象解构,解构时需要更改变量名
var {name: fathername, son: {name, sex, age}} = obj;
2.3 循环解构对象
var arr = [{name: 'chris', age: 26}, {name: 'jack', age: 27}, {name: 'peter',age: 28}];
for (let {age, name} of arr) {
    console.log(name + ' ' + age);
}

3.解构的默认值
let [a,b=2] = [1]
console.log(a+','+b); //1,2
3.1 解构中undefined和null的区别
let [a,b=2] = [1,undefined] 
console.log(a+','+b); //1,2 undefined相当于没有值，所以b会取默认值。
let [a,b=2] = [1,null]  
console.log(a+','+b); //1,null null相当于有值并且值为null，所以b会取null而没有取默认值。
4.解构的特殊用法
4.1字符串的解构赋值
let [n,o,p]='nih';
console.log(n+','+o+','+p); // n,i,h
4.2变量交换
var x = 1;
var y = 2;
var [x,y] = [y,x];

5.注：如果在解构前已经定义了变量，对象解构会失败(解决方法：加())，数组解构正常
let foo;
[foo] = [1]; 
console.log(foo);   //正常
let fooobj;
// {fooobj} = {fooobj:'a'}; //会报错
({fooobj} = {fooobj:'a'}); //正常
console.log(fooobj);
