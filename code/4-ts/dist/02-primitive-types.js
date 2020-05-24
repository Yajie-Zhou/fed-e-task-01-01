"use strict";
// 原始数据类型
var a = 'foobar';
var b = 100; // NaN Infinity
var c = true; // false
// 以上三种类型，非严格模式下，在TypeScript中默认允许为空，null / undefined
// const d: string = null
var e = undefined; // null ,严格模式下只能是undefined
var f = null;
var g = undefined;
var h = Symbol();
// 
// const error: string = 100
//# sourceMappingURL=02-primitive-types.js.map