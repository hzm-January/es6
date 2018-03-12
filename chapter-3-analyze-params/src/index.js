//数组解构赋值
let[a,b,c]=[1,2,3];
console.log(a+','+b+','+c);
//对象解构赋值
let {d,e,f} = {d:4,e:5,f:6}
console.log(d+','+e+','+f);
//默认值解构赋值
let [g,h=7] = [8]
console.log(g+','+h);
//解构赋值中的undefined和null
let [i,j=10] = [9, undefined];
console.log(i+','+j);
let [k,m=11] = [12, null];
console.log(k+','+m);
//字符串解构
let [n,o,p]='nih';
console.log(n+','+o+','+p);
//注：如果在解构前已经定义了变量，对象解构会失败，数组解构正常
let foo;
[foo] = [1]; 
console.log(foo);   //正常
let fooobj;
// {fooobj} = {fooobj:'a'}; //会报错
({fooobj} = {fooobj:'a'}); //正常
console.log(fooobj);