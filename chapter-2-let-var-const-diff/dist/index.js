var b = 'var b';
{
    let a = 'let a';
    console.log('{}内' + a);
    console.log('{}内' + b);
}
console.log('{}外' + b);
// console.log('{}外'+a); //报错index.js:7 Uncaught ReferenceError: a is not defined
const c = 'const c';
// c = 'const c to d'; //报错Uncaught TypeError: Assignment to constant variable.
console.log(c);

for (var i = 0; i < 10; i++) {
    console.log('循环体中:' + i);
}
console.log('循环体外:' + i);
