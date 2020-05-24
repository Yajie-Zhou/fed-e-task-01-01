// @flow

function square(n: number) {
    return n * n
}

let num: number = 100
// num = 'string' // 报错

function foo():number {
    return 100 // ok
    return 'string' //报错
}
function foo():void {
    // 没有返回值，默认返回undefined，应该将返回值类型标记为void
}