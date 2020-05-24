// @flow

// 函数类型  对函数参数和返回值类型进行约束

function foo(callback:(string, number) => void) {
    callback('string', 100)
}

foo(function(str, n){})