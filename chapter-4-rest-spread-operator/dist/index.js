//1.不定参
window.onload = function () {
    a(1, 2, 3, 4);
    function a(...args) {
        console.log('args.length：' + args.length);
        console.log('args ：');
        for (let iterator of args) {
            console.log(iterator);
        }
    }
};
//2.合并数组
let c = [5, 6];
let d = [7, 8, ...[c]];
console.log("let d = [7,8,...[c]] ：" + d);
//3. 与解构合用
let [e, f, ...g] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('与解构合用：' + g);
//4.修改克隆数组，不影响原始数组
let a = ['a', 'b', 'c'];
let b = [...a];
b.push('d');
console.log('修改克隆数组，不影响原始数组：');
console.log('原始数组：' + a);
console.log('克隆数组：' + b);
