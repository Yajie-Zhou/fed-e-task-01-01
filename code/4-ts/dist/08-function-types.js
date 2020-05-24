"use strict";
// 
Object.defineProperty(exports, "__esModule", { value: true });
// 参数个数必须保持一致
// 可选参数(b?:number)、参数默认值(b: number = 10)都必须出现在参数列表最后
// 接收任意个数的参数 使用 ... 操作符
function func1(a, b) {
    if (b === void 0) { b = 10; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return 'func1';
}
func1(100, 200);
func1(100);
var func2 = function (a, b) {
    return 'func2';
};
//# sourceMappingURL=08-function-types.js.map