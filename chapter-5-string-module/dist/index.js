'use strict';

var strmodule = 'houzm';
var teststr1 = 'ninhao ' + strmodule + ' !';
var teststr = 'ninhao ' + strmodule + ' !';
console.log('es5：' + teststr1);
console.log('es6：' + teststr);

var a = 1;
var b = 2;
console.log('支持运算${a+b}：' + ('' + (a + b)));

document.write('支持html标签：');
document.write('wo hen hao <b>' + strmodule + '</b>');

console.log('支持查找是否存在：' + teststr1.includes(strmodule));
console.log('判断开头：' + teststr1.startsWith('ninhao'));
console.log('判断结尾：' + teststr1.endsWith(strmodule));

console.log('复制字符串:' + 'repeat'.repeat(3));
