// 函数参数的默认值
// function foo(enable) {
//     // enable = enable || true //传入false,也会使用默认值
//     enable = enable===undefined ? true : enable
//     console.log('foo invoked - enable: ')
//     console.log(enable)
// }
// foo()


function foo(bar, enable = true) {
    console.log('foo invoked - enable: ')
    console.log(enable)
}
foo(false, true)