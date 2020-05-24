"use strict";
// 类型断言
Object.defineProperty(exports, "__esModule", { value: true });
// 假定这个 nums 来自一个明确的接口
var nums = [110, 120, 119, 112];
var res = nums.find(function (i) { return i > 0; }); // number | undefined
// const square = res * res // res 报错 
// 类型断言
var num1 = res;
var num2 = res; // JSX下不能使用
//# sourceMappingURL=11-type-assertions.js.map