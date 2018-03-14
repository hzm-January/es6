本节内容：spread扩展运算符和rest运算符
等号表达式是典型的赋值形式，函数传参和for循环的变量都是特殊形式的赋值。
解构的原理是赋值的两边具有相同的结构，就可以正确取出数组或对象里面的元素或属性值，省略了使用下标逐个赋值的麻烦。
1.两种运算符都是用...表示
2.spread扩展运算符：将数组展开，是赋值方。放在实参或者等号右边
function(a,b,c){}
var arr = [1, 2, 3];
foo(arr[0], arr[1], arr[2]);/foo(...arr);
2.1 数组深拷贝
var arr2 = arr;
var arr3 = [...arr];
console.log(arr===arr2); //true, 说明arr和arr2指向同一个数组
console.log(arr===arr3); //false, 说明arr3和arr指向不同数组
2.2 把一个数组插入到另外一个数组字面量
var arr4 = [...arr, 4,5,6];
2.3 字符串转数组
var str = 'love';
var arr5 = [...str];
console.log(arr5);//[ 'l', 'o', 'v', 'e' ]
3.rest运算符：将多个值组合成一个数组，是被赋值方。放在形参或者等号左边
bar = function(a, ...args) {
    console.log(a);
    console.log(args);
}
bar(1, 2, 3, 4);
3.1 rest运算符配合解构使用
var [a, ...rest] = [1, 2, 3, 4];
console.log(a);//1
console.log(rest);//[2, 3, 4]

运用
4.*修改克隆数组不影响原数组
//ES5
let arr1 = ['a','b','c'];
let arr2 = arr1;
arr2.push('d');
console.log(arr1); //['a','b','c','d']
//ES6
let arr1 = ['a','b','c'];
let arr2 = [...arr1];
arr2.push('d');
console.log(arr1); //['a','b','c']
console.log(arr1); //['a','b','c','d']

注：...运算符后，不能再有其他参数
function rest(a,...b,c){}//报错

经验
在等号赋值或for循环中，如果需要从数组或对象中取值，尽量使用解构。
在自己定义函数的时候，如果调用者传来的是数组或对象，形参尽量使用解构方式，优先使用对象解构，其次是数组解构。代码可读性会很好。
在调用第三方函数的时候，如果该函数接受多个参数，并且你要传入的实参为数组，则使用扩展运算符。可以避免使用下标形式传入参数。也可以避免很多人习惯的使用apply方法传入数组。
rest运算符使用场景应该稍少一些，主要是处理不定数量参数，可以避免arguments对象的使用。