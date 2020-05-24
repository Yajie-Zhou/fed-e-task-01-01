"use strict";
// 数组类型 和 flow一致
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// ... 操作符接收任意个数的参数
function sum() {
    // 判断是不是每个成员都是数字 
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // prev - 上一次计算的结果 current - 本次循环的当前值  0 - 初始值
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
sum(1, 2, 3);
//# sourceMappingURL=05-array-types.js.map