// if(true) {
//     // var foo = 'zhou'
//     let foo = 'zhou'
// }
// console.log(foo);

// --------------------------------------------------

// for循环嵌套,内层循环的i会覆盖外层循环的i
// for(var i=0; i<3; i++) {
//     for(var i=0; i<3; i++) {
//         console.log(i)
//     }
//     console.log('内层结束 i = '+i);
// }

// 不建议使用同名计数器，不利于理解
// for(let i=0; i<3; i++) {
//     for(let i=0; i<3; i++) {
//         console.log(i)
//     }
//     console.log('内层结束 i = '+i);
// }

// --------------------------------------------------

// 循环注册事件，在事件的处理函数中访问循环计数器
// var elements = [{}, {}, {}];
// for(var i=0; i<elements.length; i++) {
//     elements[i].onclick = function() {
//         console.log(i) //全局作用域的i，已被累加到3
//     }
// }
// elements[0].onclick();
// elements[1].onclick();
// elements[2].onclick();

// 闭包-借助函数作用域去摆脱全局作用域
// var elements = [{}, {}, {}];
// for(var i=0; i<elements.length; i++) {
//     elements[i].onclick = (function(i) {
//         return function() {
//             console.log(i) 
//         }
//     })(i)
// }
// elements[0].onclick();
// elements[1].onclick();
// elements[2].onclick();

// let 
// var elements = [{}, {}, {}];
// for(let i=0; i<elements.length; i++) {
//     elements[i].onclick = (function(i) {
//         return function() {
//             console.log(i) 
//         }
//     })(i)
// }
// elements[0].onclick();
// elements[1].onclick();
// elements[2].onclick();

// --------------------------------------------------

// for(let i=0; i<3; i++) {
//     let i = 'foo';
//     console.log(i) // 两个i没有在同一个作用域
// }

// let i = 0;
// if(i<3) {
//     let i = 'foo'
//     console.log(i)
// }
// i++
// if(i<3) {
//     let i = 'foo'
//     console.log(i)
// }
// i++
// if(i<3) {
//     let i = 'foo'
//     console.log(i)
// }
// i++

// --------------------------------------------------

// console.log(foo) //undefined,已声明未赋值
// var foo = 'zhou';

// console.log(foo)
// let foo = 'ya'