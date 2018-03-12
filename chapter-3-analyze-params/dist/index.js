'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//数组解构赋值
var a = 1,
    b = 2,
    c = 3;

console.log(a + ',' + b + ',' + c);
//对象解构赋值
var _d$e$f = { d: 4, e: 5, f: 6 },
    d = _d$e$f.d,
    e = _d$e$f.e,
    f = _d$e$f.f;

console.log(d + ',' + e + ',' + f);
//默认值解构赋值
var _ref = [8],
    g = _ref[0],
    _ref$ = _ref[1],
    h = _ref$ === undefined ? 7 : _ref$;

console.log(g + ',' + h);
//解构赋值中的undefined和null
var i = 9,
    _undefined = undefined,
    j = _undefined === undefined ? 10 : _undefined;

console.log(i + ',' + j);
var k = 12,
    _ref2 = null,
    m = _ref2 === undefined ? 11 : _ref2;

console.log(k + ',' + m);
//字符串解构

var _nih = 'nih',
    _nih2 = _slicedToArray(_nih, 3),
    n = _nih2[0],
    o = _nih2[1],
    p = _nih2[2];

console.log(n + ',' + o + ',' + p);
//注：如果在解构前，已经定义了变量，解构会失败
var foo = void 0;
foo = 1;

console.log(foo);
var fooobj = void 0;
// {fooobj} = {fooobj:'a'}; 会报错
var _fooobj = { fooobj: 'a' };
fooobj = _fooobj.fooobj;

console.log(fooobj);
